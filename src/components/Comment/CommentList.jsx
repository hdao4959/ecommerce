import React from 'react'
import CommentItem from './CommentItem'

const CommentList = () => {
  const data = [
    {
      id: 'hahaa',
      name: "Đào xuân hải",
      timestamp: '4242312',
      content: 'Chịu chết, lạy bố',
      vote: 4, 
      tags: [
        "Hiệu năng mạnh mẽ", 'Thời lượng pin cực khủng'
      ]
    },
    {
      id: 'hahaa',
      name: "Đào xuân hải",
      timestamp: '4242312',
      content: 'Chịu chết, lạy bố',
      vote: 4, 
      tags: [
        "Hiệu năng mạnh mẽ", 'Thời lượng pin cực khủng'
      ]
    }
  ]
  return (
    <div className='my-3' style={{
      height: "300px",
      overflowY: 'auto'
    }}>  
      {
        data?.length && data.map((item, index) => (
          <CommentItem key={index} item={item}/>
        ))
      }
    </div>
  )
}

export default CommentList
