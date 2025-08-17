import React, { useContext } from 'react'
import CommentItem from './CommentItem'
import { CommentContext } from '../../contexts/DetailProviders/CommentContext'

const Comment = () => {
  const { comments } = useContext(CommentContext)
  return (
    <div className='card shadow p-2 my-2'>
      <h3>Đánh giá về sản phẩm</h3>
      <div className='my-3' style={{
        height: "300px",
        overflowY: 'auto'
      }}>
        {
          comments?.length ? comments?.map((item, index) => (
            <CommentItem key={index} item={item} />
          )) : <span>Chưa có bình luận nào!</span>
        }
      </div>
    </div>
  )
}

export default Comment
