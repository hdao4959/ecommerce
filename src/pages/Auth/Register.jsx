import { useEffect, useState } from 'react'
import env from '../../config/env'
import { Link, useNavigate } from 'react-router-dom'
import useApi from '../../hooks/useApi'
import authService from '../../services/authService'
const Register = () => {
  const navigate = useNavigate()
  const {data: dataRegister, loading: loadingRegister, fetchApi: fetchRegister} = useApi(authService.register)
  const [form, setForm] = useState({
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
    login_type: 'phone_number'
  })

  const handleChangeForm = (event) => {
    const { name, value } = event.target
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleRegister = (e) => {
    e.preventDefault()
    if(!loadingRegister && form) {
      fetchRegister(form)
    }
  }

  useEffect(() => {
    if(dataRegister?.token && dataRegister?.account){
      sessionStorage.setItem('token', dataRegister.token)
      sessionStorage.setItem('account', JSON.stringify(dataRegister.account))
      navigate('/')
    }
  }, [dataRegister])
  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="mb-4 text-center ">
        <h2>
          <a
            href={env.VITE_CLIENT_BASE_URL}
            className="text-decoration-none text-danger fw-bold"
          >
            HairPhones
          </a>
        </h2>
      </div>
      <div className="login-container">
        <div className="text-center mb-4">
          <h3 className="text-danger login-title">Đăng ký</h3>
        </div>
        <form onSubmit={(e) => handleRegister(e)} className='row row-cols-md-2'>
          <div>

            <div className="mb-3">
              <label className="form-label fs-6">Số điện thoại</label>
              <input
                type="text"
                name='phone_number'
                required
                value={form?.phone_number}
                onChange={(e) => handleChangeForm(e)}
                className="form-control"
                placeholder="Nhập số điện thoại"
              />
            </div>
            <div className="mb-3">
              <label className="form-label fs-6">Email <span className='text-secondary'>(Không bắt buộc)</span></label>
              <input
                type="text"
                name='email'
                value={form?.email}
                onChange={(e) => handleChangeForm(e)}
                className="form-control"
                placeholder="Nhập số điện thoại"
              />
            </div>
          </div>

          <div>
            <div className="mb-3">
              <label className="form-label fs-6">Mật khẩu</label>
              <input
                type="text"
                name="password"
                value={form?.password}
                required
                onChange={(e) => handleChangeForm(e)}
                className="form-control"
                placeholder="Nhập mật khẩu"
              />
            </div>
            <div className="mb-4">
              <label className="form-label fs-6">Xác nhận lại mật khẩu</label>
              <input
                name='confirm_password'
                required
                value={form?.confirm_password}
                onChange={(e) => handleChangeForm(e)}
                type="password"
                className="form-control"
                placeholder="Nhập lại mật khẩu"
              />
            </div>

          </div>
          <div className="d-grid mb-3 text-center">
            <button type='submit' className="btn btn-danger" disabled={loadingRegister}>Đăng ký</button>
          <Link to="/login" className="text-decoration-none text-secondary my-2">
              Bạn đã có tài khoản?
            </Link>
          </div>

        </form>
      </div>
    </div>

  )
}

export default Register
