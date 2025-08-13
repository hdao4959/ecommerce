import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import GroupButtonColor from '../../components/Variant/GroupButtonColor'
import GroupButtonVariant from '../../components/Variant/GroupButtonVariant'
import { formatPrice } from '../../utils/formatPrice'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import TableTechnical from '../../components/Product/TableTechnical'
import env from '../../config/env'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/cartSlice'
import { setCheckoutItems } from '../../redux/slices/checkoutSlice'
import productService from '../../services/productService'
import useApi from '../../hooks/useApi'
import Spinner from '../../components/Spinner'
import Comment from '../../components/Comment'
const Detail = () => {
  const dispath = useDispatch();
  const serverBaseUrl = env.VITE_SERVER_BASE_URL;
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
  const idVariant = searchParams.get('var');
  const { slug } = useParams()

  const { data: dataProductDetail, loading: loadingProductDetail, fetchApi: fetchProductDetail } = useApi(productService.getProductDetail)

  console.log(dataProductDetail);

  useEffect(() => {
    if (dataProductDetail) {
      setProductLine(dataProductDetail?.productLine)
      setVariants(dataProductDetail?.variants)
      setColors(dataProductDetail?.colors)
    }
  }, [dataProductDetail])


  useEffect(() => {
    fetchProductDetail(slug, idParam)
  }, [])

  let variant = null;
  let variantColor = null;


  if (Array.isArray(variants) && variants.length > 0) {
    variant = variants.find(variant => variant._id == idVariant)
    variantColor = variant?.colors.find(color => color?.color_id == idParam)
  }

  const handleBuyNow = () => {
    dispath(setCheckoutItems([{
      _id: idParam,
      quantity: 1
    }]))
    navigate('/checkout')
  }

  console.log(variantColor);


  const handleAddToCart = () => {

    dispath(addToCart(
      {
        _id: variantColor._id,
        quantity: 1
      }
    ))

    alert("Đã thêm sản phẩm thành công vào giỏ hàng")
  }

  // useEffect(() => {
  //   if (!productLine || !variant || !variantColor) {
  //     navigate('/404')
  //   }
  // }, [productLine, variant, variantColor])


  return (
    <div className='my-3'>
      {
        loadingProductDetail ? <Spinner /> :
          <div>
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
                  <button onClick={() => handleBuyNow()} className='btn btn-danger fw-bold btn-xxl col-6 col-lg-7 fs-4'>Mua ngay</button>
                  <button onClick={() => handleAddToCart()} className='btn border-danger border-2 text-danger fw-bold col-5 col-lg-4 d-flex  align-items-center'><AddShoppingCartIcon />Thêm vào giỏ</button>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-8 mb-3">
                <div className="card shadow h-100">
                  <h3 className="p-2">Thông tin sản phẩm</h3>
                  <div
                    className="content-product p-2"
                    dangerouslySetInnerHTML={{ __html: variant?.description }}
                  ></div>
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <div className="card shadow h-100">
                  <h3 className="p-2">Thông số kĩ thuật</h3>
                  <TableTechnical variant={variant} />
                </div>
              </div>
            </div>


            <div>
              <Comment />
            </div>
          </div>
      }
    </div>
  )
}

export default Detail
