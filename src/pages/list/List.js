import { format } from 'date-fns'
import React, { useState } from 'react'
import { DateRange } from 'react-date-range'
import { useLocation } from 'react-router-dom'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import SearchItem from '../../components/searchItem/SearchItem'
import useFetch from '../../hooks/useFetch'
import "./List.css"

const List = () => {
  const location = useLocation(); // lay thong tin tu trang useNavigate() đến
  const [destination,setDestination] = useState(location.state.destination); // diem den 
  const [dates,setDates] = useState(location.state.dates);
  const [openDate,setOpenDate] = useState(false);
  const [options,setOptions] = useState(location.state.options);
  const [min,setMin] = useState(undefined);
  const [max,setMax] = useState(undefined);

  
  const {data,loading,error,reFetch} = useFetch(`/hotels?city=${destination}&min=${min || 0}&max=${max || 99999999999999}`); //proxy root config in packake.json

  const handleClick = ()=>{
    reFetch()
  }
  

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
                <span onClick={()=> setOpenDate(!openDate)}>{`${format(dates[0].startDate,"dd/MM/yyyy")} đến ${format(dates[0].endDate,"dd/MM/yyyy")}`}</span>
                {openDate && <DateRange className='date' onChange={(item) => setDates([item.selection])} ranges={dates} minDate={new Date()}/>}
              </div>
              <div className='lsItem'>
                <label>Tùy chọn:</label>
                <div className='lsOptions'>
                  <div className='lsOptionItems'>
                    <div className='lsOptionItem'>
                      <span className='lsOptionText'>Giá tối thiểu<small>/đêm </small></span>
                      <input type="number" onChange={e=>setMin(e.target.value)} className='lsOptionInput' ></input>
                    </div>
                    <div className='lsOptionItem'>
                      <span className='lsOptionText'>Giá tối đa<small>/đêm </small></span>
                      <input type="number" onChange={e=>setMax(e.target.value)} className='lsOptionInput'></input>
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
              <button onClick={handleClick}>Tìm</button>
            </div>
            
          </div>
          <div className='listResult'>
            {loading ? "loading..." : <>
              {data.map(item=>(
                <SearchItem item={item} key={item._id}/>
              ))}
            </>}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default List