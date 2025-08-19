import React, { memo, useContext, useEffect } from 'react'
import convertTimestamp from '../../utils/convertTimestamp.js';
import { useSelector } from 'react-redux';
import useApi from '../../hooks/useApi.js';
import commentService from '../../services/commentService.js';
import { CommentContext } from '../../contexts/DetailProviders/CommentContext.jsx';
import env from '../../config/env.js'
const CommentItem = ({ item }) => {
  const {response: responseDeleteComment, fetchApi: fetchDeleteComment } = useApi(commentService.destroy);
  const account = useSelector(state => state.account)
  const { setComments } = useContext(CommentContext)
  const Stars = () => {
    const result = []
    for (var i = 0; i < item?.vote; i++) {
      result.push(
        (<i key={i} className="fa-solid text-warning fa-star"></i>)
      )
    }
    return <span className='px-1 align-items-center '>
      {result}
    </span>
  }

  const handleDelete = () => {
    fetchDeleteComment(item?._id)
  }

  useEffect(() => {
    if (responseDeleteComment?.success) {
      alert("Xoá đánh giá thành công!")
      setComments(prev => prev.filter(comment => comment._id !== item._id))
    }
  }, [responseDeleteComment])

  return (
    <>
      <div className='d-flex justify-content-around'>
        <div className='p-2'>
          <img className='rounded-5' src={`${item?.user?.picture || env.VITE_SERVER_BASE_URL + "avatar_white.jpg"}`} alt="" width={"40px"} />
        </div>
        <div className='flex-fill'>
          <strong className='text-end'>{item?.user?.name}</strong>
          {
            Stars()
          }
          <div className='my-2'>
            {
              item?.badges?.map((item, index) => (
                <span key={index} className=' badge bg-secondary me-1'>{item}</span>
              ))
            }
          </div>
          <span>{item.comment}</span> <br />
          <span className='text-secondary'>{convertTimestamp(item.created_at)}</span>
        </div>
        {
          account?.id == item?.user?._id && <div className='options'>
            <div className="dropdown">
              <button className="btn btn-secondary" type="button" id={`dropdown_options_${item._id}`} data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </button>
              <ul className="dropdown-menu" aria-labelledby={`dropdown_options_${item._id}`}>
                <li onClick={() => handleDelete()}><a className="dropdown-item">Xoá</a></li>
              </ul>
            </div>
          </div>
        }

      </div>
      <hr />
    </>
  )
}

export default CommentItem
