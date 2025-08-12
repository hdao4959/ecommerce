import '../../Style/Css/Auth/Login.css'
import env from '../../config/env.js'

const Register = () => {
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
      <div className="" style={{ width: "100%" }}>
        <div className="text-center mb-4">
          <h3 className="text-danger login-title">Đăng ký</h3>
        </div>
        <form className='row'>
          <div className='col'>
            <div className="mb-3">
              <label className="form-label fs-6">Họ và tên</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập họ tên"
              />
            </div>
            <div className="mb-3">
              <label className="form-label fs-6">Số điện thoại</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập số điện thoại"
              />
            </div>
            <div className="mb-3">
              <label className="form-label fs-6">Email</label> <span className='text-secondary'>* Không bắt buộc</span>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập email"
              />
            </div>
          </div>

          <div className='col'>

            <div className="mb-4">
              <label className="form-label fs-6">Mật khẩu</label>
              <input
                type="password"
                className="form-control"
                placeholder="Nhập mật khẩu"
              />
            </div>
            <div className="mb-4">
              <label className="form-label fs-6">Nhập lại mật khẩu</label>
              <input
                type="password"
                className="form-control"
                placeholder="Nhập lại mật khẩu"
              />
            </div>
          </div>
          <div className="mb-3">
            <button className="btn btn-danger">Đăng nhập</button>
          </div>
      
          {/* <div className="text-center">
            <a href="#" className="text-decoration-none text-secondary">
              Quên mật khẩu?
            </a>
          </div>
          <div className="text-center">
            Bạn đã có tài khoản? <a href="#" className="text-decoration-none text-danger">
              Đăng ký ngay
            </a>
          </div> */}
        </form>
      </div>
    </div>

  )
}

export default Register
