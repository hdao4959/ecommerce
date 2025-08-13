import React from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

const Comment = () => {
  return (
    <div className='card p-2 my-2'>
      <h3>Đánh giá về sản phẩm</h3>
      
      {/* <CommentInput/> */}
      <CommentList/>
    </div>
  )
}

export default Comment
