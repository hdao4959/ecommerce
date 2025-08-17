import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import useApi from '../../hooks/useApi'
import commentService from '../../services/commentService'
import { CommentContext } from '../../contexts/DetailProviders/CommentContext'

const ModalComment = () => {
  const { response: responsePostComment, data: dataPostComment, fetchApi: fetchPostComment } = useApi(commentService.post);

  const { setComments } = useContext(CommentContext)

  const navigate = useNavigate()
  const location = useLocation()
  const { slug } = useParams()

  const searchParams = new URLSearchParams(location.search)
  const idVariant = searchParams.get('var');
  const account = useSelector(state => state.account)

  const badges = [{
    id: 1,
    name: 'Hiện năng mạnh mẽ'
  }, {
    id: 2,
    name: "Thời lượng pin cực khủng"
  }, {
    id: 3,
    name: 'Chất lượng camera tốt'
  }]

  const initialFormComment = {
    comment: '',
    vote: null,
    badges: [],
    variant_id: idVariant,
    slug: slug
  }


  const [formComment, setFormComment] = useState(initialFormComment)

  const ShowStars = () => {
    const stars = ["Rất tệ", "Tệ", "Bình thường", "Tốt", "Tuyệt vời"];
    const result = []
    for (let i = 0; i < 5; i++) {
      result.push(
        (<div onClick={() => handleChangeStar(i + 1)} key={i} style={{ cursor: 'pointer' }}>
          <i className={`fa-solid text-${formComment?.vote >= i + 1 ? "warning" : "secondary"}  fa-star`}></i>
          <p>{stars[i]}</p>
        </div >)
      )
    }

    const handleChangeStar = (vote) => {
      setFormComment(prev => ({
        ...prev,
        vote: vote == prev.vote ? null : vote
      }))
    }
    return result

  }

  const handleHideModal = () => {
    const modalElement = document.getElementById('comment_modal')
    const modal = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement)
    modal.hide()
  }

  const handleRedirectToLogin = () => {
    handleHideModal()
    navigate('/login')

  }

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setFormComment(prev => ({
      ...prev,
      [type == "checkbox" ? 'badges' : name]: type === "checkbox" ?
        (checked ? [...prev.badges, parseInt(value)] : prev.badges.filter(item => item != value))
        : value
    }))
  }

  const handleComment = () => {
    fetchPostComment(formComment)
  }

  useEffect(() => {
    if (responsePostComment?.success) {
      console.log(dataPostComment);
      setFormComment(initialFormComment)
      setComments(prev => ([
        dataPostComment?.comment, ...prev
      ]))
      handleHideModal()

    }
  }, [responsePostComment])

  return (
    <div
      className="modal fade"
      id="comment_modal"
      tabIndex={-1}
      aria-labelledby="comment_modal_label"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Đánh giá về sản phẩm
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">

            {
              !account ? <div>
                <h5>Bạn cần đăng nhập để đánh giá sản phẩm</h5>
                <button className='btn btn-secondary' onClick={() => handleRedirectToLogin()}>Đăng nhập</button>
              </div> :
                <>
                  <textarea value={formComment?.comment} onChange={(e) => handleChange(e)} style={{ minHeight: "100px" }} className="form-control" name="comment" id="" placeholder="Nhập đánh giá"></textarea>
                  <strong>Đánh giá chung</strong><br />
                  <div className="row row-cols-5 text-center">
                    {
                      ShowStars()
                    }
                  </div>

                  <div>
                    {
                      badges?.map((item, index) => (
                        <div key={index} style={{ cursor: 'pointer' }}>
                          <input type="checkbox" id={`checkbox_${index}`} name='' value={item?.id} onChange={(e) => handleChange(e)} /> <label htmlFor={`checkbox_${index}`}>{item?.name}</label>
                        </div>
                      ))
                    }
                  </div></>
            }


          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Đóng
            </button>
            <button onClick={() => handleComment()} type="button" disabled={account ? false : true} className="btn btn-primary">
              Đánh giá
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalComment
