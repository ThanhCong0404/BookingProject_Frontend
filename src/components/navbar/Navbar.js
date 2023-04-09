import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import "./Navbar.css"

const Navbar = () => {

  const {user} = useContext(AuthContext);

  return (
    <div className='navbar'>
        <div className='navContainer'>
            <Link to="/" style={{color:'inherit',textDecoration:'none'}}>
              <span className='logo'>BOOKING</span>
            </Link>
            {user ? user.username : (<div className='navItems'>
                <button className='navButton'>Đăng Ký</button>                
                <button className='navButton'>Đăng Nhập</button>
            </div>)}
        </div>
        
    </div>
  )
}

export default Navbar