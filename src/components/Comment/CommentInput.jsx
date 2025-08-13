import React from 'react'

const CommentInput = () => {
  return (
    // <form className='form bg-dark px-3'>
    <form className='form'>
      <div className='d-flex justify-content-around align-items-center'>
        <div className='p-1' >
          <img className='rounded-5' src="/avatar_white.jpg" height={"45px"} alt="" />
        </div>
        <div className='flex-fill p-1'>
          <input type="text" className=' form-control' />
        </div>
        <div className='p-1'>
          <button className='btn btn-primary' height="100%">Send</button>
        </div>
      </div>
      
    </form>
  )
}

export default CommentInput
