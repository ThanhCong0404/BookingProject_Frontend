import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import "./Hotel.css"

const Hotel = () => {
  const [slideNumber,setSlideNumber] = useState(0);
  const [open,setOpen] = useState(false);

  const photos = [
    {src: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {src: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {src: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {src: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {src: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {src: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
  ]

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  } 

  const handleMove = (direction) => {
    let newSlideNumber;
    if(direction === "l"){
      newSlideNumber = slideNumber === 0 ? (photos.length-1) : slideNumber-1;
    }else{
      newSlideNumber = slideNumber === (photos.length-1) ? 0 : slideNumber+1;
    }

    setSlideNumber(newSlideNumber);
  }

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        { open && <div className="slider">

          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=> setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} className="sliderImg"/>

          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
        </div>}

        <div className="hotelWrapper">
          <button className="bookNow">Đặt ngay</button>
          <h1 className="hotelTitle">Dalat Wind Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>DaLat</span>
            
          </div>
          <span className="hotelDistance">
            Vị trí tuyệt vời - Hiển thị bản đồ 

          </span>
          <span className="hotelPriceHighlight"> 
            Nhanh tay đặt ngay với giá hấp dẫn
          </span>
          <div className="hotelImages">
            {photos.map((photo,index) => (
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(index)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>

          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle"> Nomad Home Đà Lạt đã chào đón khách từ 7 tháng 11 2022. </h1>
              <p className="hotelDesc">
              Situated 3.1 km from Dalat Palace Golf Club, Nomad Home Đà Lạt features accommodation with free WiFi and free private parking.

              There is a private bathroom with shower in every unit, along with free toiletries, a hairdryer and slippers.

              Guests can relax in the garden at the property.

              Lam Vien Square is 3.4 km from the homestay, while Xuan Huong Lake is 3.5 km from the property. The nearest airport is Lien Khuong Airport, 30 km from Nomad Home Đà Lạt.
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

      </div>
    </div>
  )
}

export default Hotel