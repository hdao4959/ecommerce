import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { mockData } from '../../data/mock-data'
import GroupButtonColor from '../../components/Variant/GroupButtonColor'
import GroupButtonVariant from '../../components/Variant/GroupButtonVariant'
import { formatPrice } from '../../utils/formatPrice'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import TableTechnical from '../../components/Product/TableTechnical'
const Detail = () => {
  const navigate = useNavigate();

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const idParam = searchParams.get('id')
  const { slug } = useParams()

  // Tìm dòng sản phẩm bằng slug
  let productLine = mockData.products.find(product => product.slug == slug)

  // Tìm dòng sản phẩm bằng biến thể 
  if (slug && idParam) {
    productLine = mockData.products.find(product =>
      product.slug == slug && product.variants.some(variant =>
        variant.colors.some(color => color._id == idParam)))
  }

  const variant = productLine?.variants.find(variant =>
    variant?.colors.some(color =>
      color?._id == idParam));
  const product = variant?.colors.find(color => color?._id == idParam)

  
  useEffect(() => {
    if (!productLine || !variant || !product) {
      navigate('/404')

    }
  }, [productLine, variant, product])

  return (
    <div className='my-3'>
      <div>
        <h2>{productLine?.name} {variant?.name} {product?.name}</h2>
      </div>

      <div className='row my-2'>
        <div className='col-md-6 my-2 detail-left'>
          <div className='img-product border rounded-4 text-center'>
            <img className='img-fluid' src={`${product.img_thumbnail}`} alt="" />
          </div>
        </div>

        <div className='col-md-6 detail-right'>
          <div className='mb-3'>
            <h5>Biến thể</h5>
            <GroupButtonVariant variants={productLine?.variants} />
          </div>
          <div className='mb-3'>
            <h5>Màu sắc</h5>
            <GroupButtonColor variant={variant} />
          </div>
          <h2 className='text-danger'>Giá: {formatPrice(product?.price)}</h2>

          <div className='row gap-1 row-cols-2'>
            <button className='btn btn-danger fw-bold btn-xxl col-6 col-lg-7 fs-4'>Mua ngay</button>
            <button className='btn border-danger border-2 text-danger fw-bold col-5 col-lg-4 d-flex  align-items-center'><AddShoppingCartIcon />Thêm vào giỏ</button>
          </div>
        </div>
      </div>

      <div className='row row-cols-1 row-cols-md-2 '>
        <div className='col-md-8 card shadow py-2'>
          <h5>Thông tin sản phẩm</h5>
          {variant.description}
        </div>
        <div className='col-md-4'>
          <div className='card p-2 shadow'>
            <h5>Thông số kĩ thuật</h5>
            <TableTechnical variant={variant} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
