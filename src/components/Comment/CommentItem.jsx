import React from 'react'
import StarIcon from '@mui/icons-material/Star';
const CommentItem = ({ item }) => {
  const Stars = () => {
    const result = []
    for (var i = 0; i < item?.vote; i++) {
      result.push(
        <StarIcon fontSize='small' className='text-warning' />
      )
    }
    return <span className='px-1 align-items-center '>
      {result}
    </span>
  }
  return (
    <div className='d-flex justify-content-around'>
      <div className='p-2'>
        <img className='rounded-5' src="/avatar_white.jpg" alt="" width={"40px"} />
      </div>
      <div className='flex-fill'>
        <strong className='text-end'>{item.name}</strong>
          {
            Stars()
          }
          <div className='my-2'>
            {
              item?.tags?.map(item => (
                <span className=' badge bg-secondary me-1'>{item}</span>
              ))
            }
          </div>
        <span>{item.content}</span> <br />
        <span className='text-secondary'>{item.timestamp}</span>
        <hr />
      </div>
    </div>
  )
}

export default CommentItem
