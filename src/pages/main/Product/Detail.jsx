import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { mockData } from '../../../data/mock-data'
import GroupButtonColor from '../../../components/Variant/GroupButtonColor'
import GroupButtonVariant from '../../../components/Variant/GroupButtonVariant'
import { formatPrice } from '../../../utils/formatPrice'
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
    productLine = mockData.products.find(product => product.slug == slug && product.variants.some(variant => variant.colors.some(color => color.id == idParam)))
  }

  // if (!productLine) {
  //   navigate('/')
  // }
  const variant = productLine?.variants.find(variant => variant?.colors.some(color => color?.id == idParam));
  // if (!variant) {
  //   navigate('/')
  // }
  const product = variant?.colors.find(color => color?.id == idParam)

  useEffect(() => {
    if(!productLine || !variant || !product){
    navigate('/404')

    }
  }, [productLine, variant, product])

  return (
    <div className='my-3'>
      <div>
        <h2>{productLine?.name} {variant?.name} {product?.name}</h2>
      </div>

      <div className='row'>
        <div className='col-md-6 my-2 detail-left'>
          <div className='img-product border rounded-4 text-center'>
            <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-samsung-galaxy-s25-ultra_2__4.png" alt="" />
          </div>
        </div>

        <div className='col-md-6 my-2 detail-right'>
          <h5>Biến thể</h5>
          <GroupButtonVariant variants={productLine?.variants} />

          <h5>Màu sắc</h5>
          <GroupButtonColor variant={variant} />

          <h4>Giá: {formatPrice(variant?.price)}</h4>
        </div>
      </div>
    </div>
  )
}

export default Detail
