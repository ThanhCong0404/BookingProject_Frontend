import { faCircleXmark, faL } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { useContext } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { SearchContext } from "../../context/SearchContext"
import useFetch from "../../hooks/useFetch"
import "./Reserve.css"

// show list room of hotel to booking (reserve : đặt trước )
const Reserve = ({setOpen, hotelId}) => {
    const [selectedRooms,setSelectedRooms] = useState([]);

    const {data,loading,error} = useFetch(`/hotels/room/${hotelId}`)

    const {dates} = useContext(SearchContext);
    const getDatesInRange = (startDate,endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        
        const date = new Date(start.getTime());
        
        let dates =[];
        while (date <= end){
            dates.push(new Date(date).getTime());
            date.setDate(date.getDate() +1);

        }

        return dates;
    }

    const allDates = getDatesInRange(dates[0].startDate,dates[0].endDate);

    const isAvailable = (roomNumber) => { 
        const isFound = roomNumber.unavailableDates.some(date=> allDates.includes(new Date(date).getTime()))

        return !isFound;
    }

    const handleSelect = (e) =>{
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedRooms(checked ? [...selectedRooms, value] : selectedRooms.filter(item=> item !==value) ); // ham filter de  loai bo cac gia tri khỏi mảng
    }

    const navigate = useNavigate();
    const handleClick = async () => {
        try {
            await Promise.all(selectedRooms.map(roomId => {
                const res = axios.put(`/rooms/availability/${roomId}`,{dates: allDates});
                return res.data;
            }));
            setOpen(false);
            navigate("/");
        } catch (error) {
            
        }
    }

  return (
    <div className="reserve">
        <div className="rContainer">
            <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={ () => setOpen(false)} />

            <span>Chọn phòng : </span>
            {data.map(item => (
                <div className="rItem">
                    <div className="rItemInfo">
                        <div className="rTitle">{item.title}</div>
                        <div className="rDesc">{item.desc}</div>
                        <div className="rMax"> Tối đa : <b>{item.maxPeople}</b> người</div>
                        <div className="rPrice"> {item.price} </div>
                    </div>

                    {item.roomNumbers.map(roomNumber => (
                        <div className="room">
                                <label>{roomNumber.number}</label>
                                <input type="checkbox" value={roomNumber._id} onChange={handleSelect}  disabled={!isAvailable(roomNumber)}/>
                        </div>
                    ))}
                </div>
            ))}

            <button onClick={handleClick} className="rButton"> Đặt trước ngay !</button>
        </div>
    </div>
  )
}

export default Reserve