import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Left = ({ categories }) => {

  const [currentParentId, setCurrentParentId] = useState(null);
  const [categoriesMap, setCategoriesMap] = useState({});
  useEffect(() => {
    if (categories && categories.length > 0) {
      const categoriesMap = categories.reduce((acc, cate) => {
        acc[cate._id.toString()] = cate;
        return acc
      }, {})
      setCategoriesMap(categoriesMap)
    }
  }, [categories])

  

  const showMoreCategory = (parentId) => {
    const menuChild = document.querySelector(`.menu-child-${parentId}`);
    const cateParent = document.querySelector(`.menu-parent-${parentId}`);

    if (!menuChild || !cateParent) return;

    if (currentParentId === parentId) {
      cateParent.classList.toggle('active');
      menuChild.classList.toggle('d-none');
      if (menuChild.classList.contains('d-none')) {
        parentId = null
      }
    } else {
      if (currentParentId) {
        const previousMenuChild = document.querySelector(`.menu-child-${currentParentId}`);
        const previousParent = document.querySelector(`.menu-parent-${currentParentId}`);
        if (previousMenuChild) previousMenuChild.classList.add('d-none');
        if (previousParent) previousParent.classList.remove('active');
      }

      cateParent.classList.add('active');
      menuChild.classList.remove('d-none');
    }

    setCurrentParentId(parentId);
  };

  return (
    <Card className='flex-fill d-none d-md-block col-md-3 col-lg-3 col-xl-2 p-0'>
      <Card.Body className="p-0">
        {categories.map((cate, index) =>
          <div key={index}>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                showMoreCategory(cate._id);
              }}
              className={`link-category menu-parent-${cate._id}`}
            >
              <span>{cate.name}</span>
              {
                currentParentId == cate._id ?
                  <i class="fa-solid fa-angle-down"></i> : <i className="fa-solid fa-angle-up"></i>
              }
            </Link>

            <div className={`menu-child-${cate._id} d-none`}>
              {
                categoriesMap?.[cate._id.toString()]?.children?.map((child, index) => (
                  <Link to={`/category/${child?._id}`} key={index} className={`link-category`}>
                    <span>
                      <i className="fa-solid fa-sm fa-angle-right"></i>  {child.name}
                      </span>
                  </Link>
                ))
              }

            </div>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default Left;
