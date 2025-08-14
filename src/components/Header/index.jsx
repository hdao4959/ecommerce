import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/accountSlice';

const Header = ({ account = {} }) => {
  const [valueSearch, setValueSearch] = useState("");

  const navigate = useNavigate();
  const dispath = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const quantityItem = cartItems.reduce((total, item) => {
    total = total + item.quantity
    return total
  }, 0)

  const [openMenuAccount, setOpenMenuAccount] = useState(false);
  const menuRef = useRef();

  const handleOpenAccount = () => {
    setOpenMenuAccount(prev => !prev);
  };

  const handleLogout = () => {
    dispath(logout());
    navigate('/login')
  }

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenuAccount(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (event) => {
    navigate("/search?q=" + valueSearch)
    event.preventDefault()
  }



  return (
    <div id='header-client' className='row row-cols-2 row-cols-md-3 position-fixed top-0 start-0 g-0 align-items-center px-3 px-sm-4 px-md-5 w-100' style={{
      backgroundColor: "#d70018",
      height: "64px",
      // overflow: 'hidden',
      zIndex: 999
    }}>
      <span className='col'>
        <Link id='logo' to={"/"} className='text-decoration-none fs-1 fw-bold text-light'>HairPhones</Link>
      </span>

      <form className='col h-100 align-content-center text-center' id='form-search' onSubmit={(event) => handleSearch(event)}>
        <input className='border-0 no-outline fs-4 rounded-4 px-3 w-100' style={{
          // width: "100%",
          // height: '40px',
        }} type="text" value={valueSearch} onChange={(event) => setValueSearch(event.target.value)} placeholder='Bạn cần tìm gì?' />
      </form>

      <div className='col-auto h-100 align-content-center col text-end d-none d-md-block align-items-center'>
        <div className='d-flex justify-content-end align-items-center'>
          <Link to="/cart" className='me-1 position-relative btn button-header bg-light'>
            <i className="fa-solid fa-sm fa-cart-plus"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
              {quantityItem}
              <span className="visually-hidden">unread messages</span>
            </span>
          </Link>

          {
            account ? (
              <div className="position-relative" ref={menuRef}>
                <Avatar
                  src={account?.picture}
                  onClick={handleOpenAccount}
                  style={{ cursor: 'pointer', marginLeft: '10px' }}
                />
                {
                  openMenuAccount && (
                    <div
                      className="bg-white border shadow-sm p-2"
                      style={{
                        position: 'fixed',
                        top: '64px',
                        right: '20px',
                        minWidth: '150px',
                        zIndex: 9999,
                        borderRadius: '6px'
                      }}
                    >
                      <div className="mb-2 px-2 fw-bold">{account.name || "User"}</div>
                      <button
                        className="btn btn-outline-danger w-100"
                        onClick={() => handleLogout()}
                      >
                        Đăng xuất
                      </button>
                    </div>
                  )
                }

              </div>
            ) : (
              <Link to="/login" className='btn button-header button-signin bg-light'>
                Đăng nhập
              </Link>
            )
          }

        </div>
      </div>
    </div >
  );
};

export default Header;
