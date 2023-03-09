import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import "./Header.css"
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'

const Header = (type) => {
    const [openDate,setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

    const [openOptions,setOpenOptions] = useState(false);
    const [options,setOptions] = useState({
        adult:1,
        children: 0,
        room: 1
    });

    const handleOption = (name , operation) => {
        setOptions(prev => {return {
            ...prev,
            [name] : operation === "i" ? options[name] + 1 : options[name] -1 ,
            
        }})

    }

  return (
    <div className='header'>
        <div className={type === "list" ? 'headerContainer listMode' : 'headerContainer'}>

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
            { type !== "list" && 
                <>
                <h1 className='headerTitle'>Nhiều Ưu Đãi Hấp Dẵn</h1>
                <p className='headerDesc'>
                    Nhận ưu đãi 10% khi đăng ký tài khoản và nhiều ưu đãi hấp dẫn !
                </p>
                <button className='headerBtn'>Sign In / Register</button>
                <div className='headerSearch'>
                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input type="text" placeholder='Nhập nơi bạn muốn đi' className='headerSearchInput' />
                    </div>

                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span onClick={()=> setOpenDate(!openDate)} className='headerSearchText'> {`${format(date[0].startDate,"dd/MM/yyyy")} đến ${format(date[0].endDate,"dd/MM/yyyy")}`} </span>

                    {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='date'
                        />}
                    </div>

                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span onClick={()=> setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} người lớn - ${options.children} trẻ em - ${options.room} phòng`}
                            {openOptions && <div className='options'>
                                <div className='optionItem'>
                                    <span className='optionText'>Người lớn</span>
                                    <div className='optionCounter'>
                                        <button disabled={options.adult <=1 } className="optionCounterButton" onClick={()=> handleOption("adult","d")}>-</button>
                                        <span className="optionCounterNumber">{options.adult}</span>
                                        <button className="optionCounterButton"  onClick={()=> handleOption("adult","i")}>+</button>
                                    </div>
                                </div>
                                <div className='optionItem'>
                                    <span className='optionText'>Trẻ em</span>
                                    <div className='optionCounter'>
                                        <button disabled={options.children <=0 } className="optionCounterButton"  onClick={()=> handleOption("children","d")}>-</button>
                                        <span className="optionCounterNumber">{options.children}</span>
                                        <button className="optionCounterButton"  onClick={()=> handleOption("children","i")}>+</button>
                                    </div>
                                </div> <div className='optionItem'>
                                    <span className='optionText'>Phòng</span>
                                    <div className='optionCounter'>
                                        <button disabled={options.adult <=1 } className="optionCounterButton"  onClick={()=> handleOption("room","d")}>-</button>
                                        <span className="optionCounterNumber">{options.room}</span>
                                        <button className="optionCounterButton"  onClick={()=> handleOption("room","i")}>+</button>
                                    </div>
                                </div>

                            </div>}
                        </span>
                    </div>
                    <div className='headerSearchItem'>
                        <button className='headerBtn'>
                            Tìm kiếm 
                        </button>
                    </div>

                </div>
                </>
            }

        </div>
    </div>
  )
}

export default Header