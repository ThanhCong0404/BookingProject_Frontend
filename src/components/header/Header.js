import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className='headerContainer'>

          <div className='headerList'>
                <div className='headerListItem active'>
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>

                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>

                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rentals</span>
                </div>

                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>

                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport Taxi</span>
                </div>
            </div>
            <h1 className='headerTitle'>Nhiều Ưu Đãi Hấp Dẵn</h1>
            <p className='headerDesc'>
                Nhận ưu đãi 10% khi đăng ký tài khoản và nhiều ưu đãi hấp dẫn !
            </p>
            <button className='headerBtn'>Sign In / Register</button>

        </div>
    </div>
  )
}

export default Header