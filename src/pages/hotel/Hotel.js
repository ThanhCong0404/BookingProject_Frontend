import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import Reserve from "../../components/reserve/Reserve"
import { AuthContext } from "../../context/AuthContext"
import { SearchContext } from "../../context/SearchContext"
import useFetch from "../../hooks/useFetch"
import "./Hotel.css"

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber,setSlideNumber] = useState(0);
  const [open,setOpen] = useState(false);
  const [openModal,setOpenModal] = useState(false);

  const {data,loading,error,reFetch} = useFetch(`/hotels/find/${id}`); //proxy root config in packake.json

  
  const {user} = useContext(AuthContext);

  const {dates,options} = useContext(SearchContext);
  const navigate = useNavigate();
  
  const MILISECONS_PER_DAY = 1000 * 60 *60 *24;
  function dayDifference(date1,date2){
    const timeDiff = Math.abs(date2.getTime() - date1.getTime())
    const diffDays = Math.ceil(timeDiff/ MILISECONS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate,dates[0].startDate); 

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  } 

  const handleMove = (direction) => {
    let newSlideNumber;
    if(direction === "l"){
      newSlideNumber = slideNumber === 0 ? (data.photos.length-1) : slideNumber-1;
    }else{
      newSlideNumber = slideNumber === (data.photos.length-1) ? 0 : slideNumber+1;
    }

    setSlideNumber(newSlideNumber);
  }


  const handleClick= ()=>{
    if(user){
      setOpenModal(true);
    }else {
      navigate("login");
    }

  }

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      { loading ? "loading..." : <div className="hotelContainer">
        { open && <div className="slider">

          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=> setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
          <div className="sliderWrapper">
            <img src={data.photos[slideNumber]} className="sliderImg"/>

          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
        </div>}

        <div className="hotelWrapper">
          <button className="bookNow">Đặt ngay</button>
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>{data.address}</span>
            
          </div>
          <span className="hotelDistance">
            Vị trí tuyệt vời - Cách trung tâm {data.distance}m 

          </span>
          <span className="hotelPriceHighlight"> 
            Nhanh tay đặt ngay với giá hấp dẫn chỉ từ {data.cheapestPrice}
          </span>
          <div className="hotelImages">
            {data.photos?.map((photo,index) => (
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(index)} src={photo} alt="" className="hotelImg" />
              </div>
            ))}
          </div>

          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle"> {data.title} </h1>
              <p className="hotelDesc">
                {data.desc}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Hoàn hảo cho kỳ nghỉ {days} đêm!</h1>
              <span>
                Địa điểm hàng đầu: Được khách gần đây đánh giá cao (8,8 điểm)
              </span>
              <h2>
                <b>${days * data.cheapestPrice * options.room} VND</b> ({days} đêm)
              </h2>
              <button onClick={handleClick}>Đặt ngay</button>
            </div>
          </div>
        </div>

      </div>}



      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </div>
  )
}

export default Hotel