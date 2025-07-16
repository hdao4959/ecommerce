import React, { useState, useRef, useEffect } from 'react';
import "../../Style/Css/Header.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import authService from '../../services/authService';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/accountSlice';

const Header = ({ account = {} }) => {
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

  return (
    <div id='header-client' className='row row-cols-2 row-cols-md-3 align-items-center px-3 px-sm-4 px-md-5'>
      <Link id='logo' to={"/"} className='text-decoration-none'>HairPhones</Link>

      <form id='form-search'>
        <input type="text" placeholder='Bạn cần tìm gì?' />
      </form>

      <div className='text-end d-none d-md-block align-items-center'>
        <div className='d-flex justify-content-end align-items-center'>

          <Link to="/cart" className='position-relative btn button-header bg-light'>
            <AddShoppingCartIcon />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
              {quantityItem}
              <span className="visually-hidden">unread messages</span>
            </span>
          </Link>

          {
            account && account.picture ? (
              <div className="position-relative" ref={menuRef}>
                <Avatar
                  src={account.picture}
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
    </div>
  );
};

export default Header;
