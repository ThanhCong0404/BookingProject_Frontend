import { format } from 'date-fns'
import React, { useState } from 'react'
import { DateRange } from 'react-date-range'
import { useLocation } from 'react-router-dom'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import SearchItem from '../../components/searchItem/SearchItem'
import "./List.css"

const List = () => {
  const location = useLocation();
  const [destination,setDestination] = useState(location.state.destination);
  const [date,setDate] = useState(location.state.date);
  const [openDate,setOpenDate] = useState(false);
  const [options,setOptions] = useState(location.state.options);
  

  return (
    <div>
      <Navbar/>
      <Header type='list' />
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='lsTitle'>Tìm Kiếm</h1>
            <div className='lsItems'>
              <div className='lsItem'>
                <label>Điểm đến:</label>
                <input placeholder={destination} type="text"/>
              </div>
              <div className='lsItem'>
                <label>Ngày:</label>
                <span onClick={()=> setOpenDate(!openDate)}>{`${format(date[0].startDate,"dd/MM/yyyy")} đến ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
                {openDate && <DateRange className='date' onChange={(item) => setDate([item.selection])} ranges={date} minDate={new Date()}/>}
              </div>
              <div className='lsItem'>
                <label>Tùy chọn:</label>
                <div className='lsOptions'>
                  <div className='lsOptionItems'>
                    <div className='lsOptionItem'>
                      <span className='lsOptionText'>Giá tối thiểu<small>/đêm </small></span>
                      <input type="number" className='lsOptionInput' ></input>
                    </div>
                    <div className='lsOptionItem'>
                      <span className='lsOptionText'>Giá tối đa<small>/đêm </small></span>
                      <input type="number" className='lsOptionInput'></input>
                    </div>
                    
                  </div>

                  <div className='lsOptionItems'>
                    <div className='lsOptionItem'>
                      <span className='lsOptionText'>Người lớn </span>
                      <input type="number" min={1} className='lsOptionInput' placeholder={options.adult}></input>
                    </div>
                    <div className='lsOptionItem'>
                      <span className='lsOptionText'>Trẻ em </span>
                      <input type="number" min={0} className='lsOptionInput' placeholder={options.children}></input>
                    </div>
                    <div className='lsOptionItem'>
                      <span className='lsOptionText'>Phòng </span>
                      <input type="number" min={1} className='lsOptionInput' placeholder={options.room}></input>
                    </div>
                  </div>
                </div>
              </div>
              <button>Tìm</button>
            </div>
            
          </div>
          <div className='listResult'>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List