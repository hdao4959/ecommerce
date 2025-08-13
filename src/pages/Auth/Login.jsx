import { useEffect, useState } from 'react'
import '../../Style/Css/Auth/Login.css'
import env from '../../config/env.js'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginWithGoogle } from '../../redux/slices/accountSlice.js'
import authService from '../../services/authService.js'
import useApi from '../../hooks/useApi.js'
const Login = () => {
  const { loading: loadingLogin, data: dataLogin, fetchApi: fetchLogin } = useApi(authService.login)
  const { data: dataLoginGg, fetchApi: fetchLoginGg} = useApi(authService.loginWithGoogle)
  const dispath = useDispatch();
  const navigate = useNavigate();
  const [formLogin, setFormLogin] = useState({
    phone_number: '',
    password: '',
    login_type: 'phone_number'
  })

  const handleChangeFormLogin = (event) => {
    const { name, value } = event.target
    setFormLogin(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleLogin = (event) => {
    event.preventDefault()
    if (!loadingLogin && formLogin) {
      fetchLogin(formLogin)
    }
  }

  useEffect(() => {
    if (dataLogin?.account) {
      authService.saveAccount(dataLogin.account)
      if (dataLogin?.token) {
        authService.saveToken(dataLogin.token)
      }
      navigate('/')
    }
  }, [dataLogin])

  const handleCredentialResponse = async (response) => {
    const credential = response.credential
    fetchLoginGg(credential)
  }

  useEffect(() => {
    console.log(dataLoginGg);
    
    if(dataLoginGg){
      dispath(loginWithGoogle(dataLoginGg))
      navigate('/')
    }
  }, [dataLoginGg])

  useEffect(() => {
    window.handleCredentialResponse = handleCredentialResponse;

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      delete window.handleCredentialResponse;
    };
  }, []);
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
      <div className="login-container" style={{ width: "100%" }}>
        <div className="text-center mb-4">
          <h3 className="text-danger login-title">Đăng nhập</h3>
        </div>
        <form onSubmit={(e) => handleLogin(e)}>
          <div className="mb-3">
            <label className="form-label fs-6">Số điện thoại</label>
            <input
              type="text"
              name='phone_number'
              value={formLogin.phone_number}
              onChange={(e) => handleChangeFormLogin(e)}
              className="form-control"
              placeholder="Nhập số điện thoại của bạn"
            />
          </div>
          <div className="mb-4">
            <label className="form-label fs-6">Mật khẩu</label>
            <input
              name='password'
              value={formLogin.password}
              onChange={(e) => handleChangeFormLogin(e)}
              type="password"
              className="form-control"
              placeholder="Nhập mật khẩu của bạn"
            />
          </div>
          <div className="d-grid mb-3">
            <button type='submit' className="btn btn-danger">Đăng nhập</button>
          </div>
          <div
            id="g_id_onload"
            data-client_id={`${env.VITE_CLIENT_ID}`}
            data-callback="handleCredentialResponse"
            data-auto_prompt="false"
          ></div>
          <div
            className="g_id_signin my-2"
            data-type="standard"
            data-size="large"
            data-theme="outline"
            data-text="sign_in_with"
            data-shape="rectangular"
            data-logo_alignment="left"
          ></div>
          <div className="text-center">
            <a href="#" className="text-decoration-none text-secondary">
              Quên mật khẩu?
            </a>
          </div>
          <div className="text-center">
            Bạn chưa có tài khoản? <Link to="/register" className="text-decoration-none text-danger">
              Đăng ký ngay
            </Link>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Login
