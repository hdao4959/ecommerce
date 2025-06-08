import { useEffect } from 'react'
import '../../Style/Css/Auth/Login.css'
import axiosInstance from '../../utils/axios'
import env from '../../config/env.js'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/slices/accountSlice.js'
import authService from '../../services/authService.js'
const Login = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();

  const handleCredentialResponse = async (response) => {
    const credential = response.credential
    try {
      const account = await authService.loginWithGoogle(credential)
      dispath(login(account))
      navigate('/')
    } catch (error) {
      alert(error)
    }
  }

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
        <form>
          <div className="mb-3">
            <label className="form-label fs-6">Số điện thoại</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nhập số điện thoại của bạn"
            />
          </div>
          <div className="mb-4">
            <label className="form-label fs-6">Mật khẩu</label>
            <input
              type="password"
              className="form-control"
              placeholder="Nhập mật khẩu của bạn"
            />
          </div>
          <div className="d-grid mb-3">
            <button className="btn btn-danger">Đăng nhập</button>
          </div>
          <div
            id="g_id_onload"
            data-client_id={`${env.VITE_CLIENT_ID}`}
            data-callback="handleCredentialResponse"
            data-auto_prompt="false"
          ></div>
          <div
            className="g_id_signin"
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
        </form>
      </div>
    </div>

  )
}

export default Login
