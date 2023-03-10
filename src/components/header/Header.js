import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import "./Header.css"
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
import { useNavigate } from 'react-router-dom'

const Header = ({type}) => {
    const [destination,setDestination] = useState("");

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

    const navigate = useNavigate();

    const handleOption = (name , operation) => {
        setOptions(prev => {return {
            ...prev,
            [name] : operation === "i" ? options[name] + 1 : options[name] -1 ,
            
        }})

    };

    const handleSearch = () =>{
        navigate("/hotels",{state: {destination,date,options}});
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
                <h1 className='headerTitle'>Nhi???u ??u ????i H???p D???n</h1>
                <p className='headerDesc'>
                    Nh???n ??u ????i 10% khi ????ng k?? t??i kho???n v?? nhi???u ??u ????i h???p d???n !
                </p>
                <button className='headerBtn'>????ng Nh???p / ????ng K??</button>
                <div className='headerSearch'>
                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input onChange={e=>setDestination(e.target.value)} type="text" placeholder='Nh???p n??i b???n mu???n ??i' className='headerSearchInput' />
                    </div>

                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span onClick={()=> setOpenDate(!openDate)} className='headerSearchText'> {`${format(date[0].startDate,"dd/MM/yyyy")} ?????n ${format(date[0].endDate,"dd/MM/yyyy")}`} </span>

                    {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='date'
                            minDate={new Date()}
                        />}
                    </div>

                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span onClick={()=> setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} ng?????i l???n - ${options.children} tr??? em - ${options.room} ph??ng`}
                            {openOptions && <div className='options'>
                                <div className='optionItem'>
                                    <span className='optionText'>Ng?????i l???n</span>
                                    <div className='optionCounter'>
                                        <button disabled={options.adult <=1 } className="optionCounterButton" onClick={()=> handleOption("adult","d")}>-</button>
                                        <span className="optionCounterNumber">{options.adult}</span>
                                        <button className="optionCounterButton"  onClick={()=> handleOption("adult","i")}>+</button>
                                    </div>
                                </div>
                                <div className='optionItem'>
                                    <span className='optionText'>Tr??? em</span>
                                    <div className='optionCounter'>
                                        <button disabled={options.children <=0 } className="optionCounterButton"  onClick={()=> handleOption("children","d")}>-</button>
                                        <span className="optionCounterNumber">{options.children}</span>
                                        <button className="optionCounterButton"  onClick={()=> handleOption("children","i")}>+</button>
                                    </div>
                                </div> <div className='optionItem'>
                                    <span className='optionText'>Ph??ng</span>
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
                            T??m ki???m 
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