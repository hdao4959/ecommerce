import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import GroupButtonColor from '../../components/Variant/GroupButtonColor'
import GroupButtonVariant from '../../components/Variant/GroupButtonVariant'
import { formatPrice } from '../../utils/formatPrice'
import TableTechnical from '../../components/Product/TableTechnical'
import env from '../../config/env'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/cartSlice'
import { setCheckoutItems } from '../../redux/slices/checkoutSlice'
import productService from '../../services/productService'
import useApi from '../../hooks/useApi'
import Spinner from '../../components/Spinner'
import Comment from '../../components/Comment'
import VoteAnalysis from '../../components/VoteAnalysis.jsx'
import commentService from '../../services/commentService.js'
import { CommentContext } from '../../contexts/DetailProviders/CommentContext.jsx'
import { ProductLineContext } from '../../contexts/DetailProviders/ProductLineContext.jsx'
import { VariantContext } from '../../contexts/DetailProviders/VariantContext.jsx'
import { VariantsContext } from '../../contexts/DetailProviders/VariantsContext.jsx'
import { VariantColorContext } from '../../contexts/DetailProviders/VariantColorProvider.jsx'
import { ColorMapContext } from '../../contexts/DetailProviders/ColorMapProvider.jsx'
const Detail = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const { slug } = useParams()
  const idVariant = searchParams.get('var');
  const idParam = searchParams.get('id')

  const { data: dataProductDetail, loading: loadingProductDetail, fetchApi: fetchProductDetail } = useApi(productService.getProductDetail)
  const { data: dataListComment, fetchApi: fetchListComment } = useApi(commentService.getListForVariant);
  const { productLine, setProductLine } = useContext(ProductLineContext)
  const { variant, setVariant } = useContext(VariantContext)
  const { setVariants } = useContext(VariantsContext)
  const { variantColor, setVariantColor } = useContext(VariantColorContext)
  const { colorMap, setColorMap } = useContext(ColorMapContext)
  const { setComments } = useContext(CommentContext)

  useEffect(() => {
    if (dataProductDetail) {
      setProductLine(dataProductDetail?.productLine)
      setVariants(dataProductDetail?.variants)
      setColorMap(dataProductDetail?.colors.reduce((acc, color) => {
        acc[color._id.toString()] = color.name;
        return acc
      }))
      const foundVariant = dataProductDetail?.variants.find(variant => variant._id == idVariant)
      setVariant(foundVariant)
      setVariantColor(foundVariant?.colors.find(color => color?.color_id == idParam))
    }
  }, [dataProductDetail, idVariant, idParam])

  useEffect(() => {
    fetchProductDetail(slug, idParam)
  }, [slug, idParam, idVariant])

  const handleBuyNow = () => {
    dispath(setCheckoutItems([{
      _id: idParam,
      quantity: 1
    }]))
    navigate('/checkout')
  }

  const handleAddToCart = () => {
    dispath(addToCart(
      {
        _id: variantColor._id,
        quantity: 1
      }
    ))
    alert("Đã thêm sản phẩm thành công vào giỏ hàng")
  }

  useEffect(() => {
    if (variant?._id) {
      fetchListComment(variant._id)
    }
  }, [variant])

  useEffect(() => {
    if (dataListComment?.comments) {
      setComments(dataListComment?.comments)
    }
  }, [dataListComment?.comments])

  return (
    <div className='my-3'>
      {
        loadingProductDetail ? <Spinner /> :
          !productLine ? <strong>Không tìm thấy sản phẩm</strong> :
            <div>
              <div>
                <h2>{productLine?.name} {variant?.name} {colorMap[variantColor?.color_id]}
                </h2>
              </div>

              <div className='row my-2'>
                <div className='col-md-6 my-2 detail-left'>
                  <div className='img-product border rounded-4 text-center'>
                    <img className='img-fluid' src={`${env.VITE_SERVER_BASE_URL}${variantColor?.img}`} alt="" />
                  </div>
                </div>

                <div className='col-md-6 detail-right'>
                  <div className='mb-3'>
                    <h5>Biến thể</h5>
                    <GroupButtonVariant />
                  </div>
                  <div className='mb-3'>
                    <h5>Màu sắc</h5>
                    <GroupButtonColor colorMap={colorMap} />
                  </div>
                  <h2 className='text-danger'>Giá: {formatPrice(variantColor?.price)}</h2>
                  <div className='row gap-1 row-cols-2'>
                    <button onClick={() => handleBuyNow()} className='btn btn-danger fw-bold btn-xxl col-6 col-lg-7 fs-4'>Mua ngay</button>
                    <button onClick={() => handleAddToCart()} className='btn border-danger border-2 text-danger fw-bold col-5 col-lg-4 d-flex  align-items-center'><i className="fa-solid fa-cart-plus px-2 "></i>Thêm vào giỏ</button>
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
                    <TableTechnical />
                  </div>
                </div>
              </div>

              <div className='card bg-light shadow p-2'>
                <h3>Đánh giá {productLine?.name + variant?.name}</h3>
                <VoteAnalysis />
                <Comment />
              </div>
            </div>

      }
    </div>

  )
}

export default Detail
