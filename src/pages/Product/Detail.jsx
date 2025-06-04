import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { mockData } from '../../data/mock-data'
import GroupButtonColor from '../../components/Variant/GroupButtonColor'
import GroupButtonVariant from '../../components/Variant/GroupButtonVariant'
import { formatPrice } from '../../utils/formatPrice'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import TableTechnical from '../../components/Product/TableTechnical'
import axiosInstance from '../../utils/axios'

const Detail = () => {
  const serverBaseUrl = import.meta.env.VITE_SERVER_BASE_URL;
  const [productLine, setProductLine] = useState({})
  const [variants, setVariants] = useState([])
  
  const [colors, setColors] = useState([]);
    
   const colorMap = colors?.reduce((acc, color) => {
    acc[color._id.toString()] = color.name;
    return acc
  }, {})
  const navigate = useNavigate();

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const idParam = searchParams.get('id')
  const { slug } = useParams()
  useEffect(() => {
    (async () => {
      const { data } = await axiosInstance.get('/products/' + slug + '?id=' + idParam);
      
      setProductLine(data.data.productLine)
      setVariants(data.data.variants)
      setColors(data.data.colors)
    })()
  }, [])


  let variant = null;
  let variantColor = null;
  if (Array.isArray(variants) && variants.length > 0) {
    variant = variants?.find(variant =>
      Array.isArray(variant?.colors) && variant?.colors.some(color =>
        color?._id == idParam));
    variantColor = variant?.colors.find(color => color?._id == idParam)
  }

const addToCard = () => {

  // const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
  // if(!cart){
  //   const product = {
  //     _idVariantColor: idParam,
  //     quantity: 1
  //   }
  //   localStorage.setItem('cart', [])
  // }
  // console.log(localStorage.getItem('cart'));
  
  console.log(idParam);
}
  // useEffect(() => {
  //   if (!productLine || !variant || !variantColor) {
  //     navigate('/404')
  //   }
  // }, [productLine, variant, variantColor])

  return (
    <div className='my-3'>
      <div>
        <h2>{productLine?.name} {variant?.name} {colorMap[variantColor?.color_id]}
        </h2>
      </div>

      <div className='row my-2'>
        <div className='col-md-6 my-2 detail-left'>
          <div className='img-product border rounded-4 text-center'>
            <img className='img-fluid' src={`${serverBaseUrl}${variantColor?.img}`} alt="" />
          </div>
        </div>

        <div className='col-md-6 detail-right'>
          <div className='mb-3'>
            <h5>Biến thể</h5>
            <GroupButtonVariant variants={variants} productLine={productLine} />
          </div>
          <div className='mb-3'>
            <h5>Màu sắc</h5>
            <GroupButtonColor variant={variant} colorMap={colorMap} productLine={productLine} />
          </div>
          <h2 className='text-danger'>Giá: {formatPrice(variantColor?.price)}</h2>
          <div className='row gap-1 row-cols-2'>
            <button className='btn btn-danger fw-bold btn-xxl col-6 col-lg-7 fs-4'>Mua ngay</button>
            <button onClick={() => addToCard()} className='btn border-danger border-2 text-danger fw-bold col-5 col-lg-4 d-flex  align-items-center'><AddShoppingCartIcon />Thêm vào giỏ</button>
          </div>
        </div>
      </div>

      <div className='row row-cols-1 row-cols-md-2 '>
        <div className='col-md-8 card shadow py-2'>
          <h5>Thông tin sản phẩm</h5>
          {/* {variant.description} */}
        </div>
        <div className='col-md-4'>
          <div className='card p-2 shadow'>
            <h5>Thông số kĩ thuật</h5>
            {/* <TableTechnical variant={variant} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
