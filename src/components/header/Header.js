import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import "./Header.css"
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
import { Link, useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'
import { AuthContext } from '../../context/AuthContext'

const Header = ({type}) => {
    const [destination,setDestination] = useState("");

    const [openDate,setOpenDate] = useState(false);
    const [dates, setDates] = useState([
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

    const navigate = useNavigate();

    
  const {user} = useContext(AuthContext);

    const handleOption = (name , operation) => {
        setOptions(prev => {return {
            ...prev,
            [name] : operation === "i" ? options[name] + 1 : options[name] -1 ,
            
        }})

    };

    const {dispatch} = useContext(SearchContext);

    const handleSearch = () =>{
        dispatch({type:"NEW_SEARCH",payload:{destination,dates,options}});
        navigate("/hotels",{state: {destination,dates,options}});
    }

  return (
    
    <div className='header'>
        <div className={type === "list" ? 'headerContainer listMode' : 'headerContainer'}>

            <div className='headerList'>
                <div className='headerListItem active'>
                    <FontAwesomeIcon icon={faBed} />
                    <span>Lưu trú</span>
                </div>

                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Chuyến bay</span>
                </div>

                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faCar} />
                    <span>Thuê xe</span>
                </div>

                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faBed} />
                    <span>Địa điểm tham quan</span>
                </div>

                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Taxi Sân bay</span>
                </div>
            </div>
            { type !== "list" && 
                <>
                <h1 className='headerTitle'>Nhiều Ưu Đãi Hấp Dẵn</h1>
                <p className='headerDesc'>
                    Nhận ưu đãi 10% và rất nhiều ưu đãi hấp dẫn !
                </p>
                { !user && <Link to="/login"><button className='headerBtn'>Đăng Nhập / Đăng Ký</button></Link>}
                <div className='headerSearch'>
                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input onChange={e=>setDestination(e.target.value)} type="text" placeholder='Nhập nơi bạn muốn đi' className='headerSearchInput' />
                    </div>

                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span onClick={()=> setOpenDate(!openDate)} className='headerSearchText'> {`${format(dates[0].startDate,"dd/MM/yyyy")} đến ${format(dates[0].endDate,"dd/MM/yyyy")}`} </span>

                    {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDates([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={dates}
                            className='date'
                            minDate={new Date()}
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
                        <button className='headerBtn' onClick={handleSearch}>
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