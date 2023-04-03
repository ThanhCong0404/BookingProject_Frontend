import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import useFetch from "../../hooks/useFetch"
import "./Hotel.css"

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber,setSlideNumber] = useState(0);
  const [open,setOpen] = useState(false);

  const {data,loading,error,reFetch} = useFetch(`/hotels/find/${id}`); //proxy root config in packake.json


 

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
              <h1>Hoàn hảo cho kỳ nghỉ 3 đêm!</h1>
              <span>
                Địa điểm hàng đầu: Được khách gần đây đánh giá cao (8,8 điểm)
              </span>
              <h2>
                <b>900.000 VND</b> (3 đêm)
              </h2>
              <button>Đặt ngay</button>
            </div>
          </div>
        </div>

      </div>}
    </div>
  )
}

export default Hotel