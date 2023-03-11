import "./SearchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://images.pexels.com/photos/15760049/pexels-photo-15760049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="siImg"/>
        <div className="siDesc">
            <h1 className="siTitle">Annata Beach Hotel</h1>
            <span className="siDistance">cách trung tâm 500m</span>
            <span className="siTaxiOp">Free Airpod Taxi</span>
            <span className="siSubtitle">
                Khách sạn đạt chuẩn 5 sao đầy đủ tiện nghi 
            </span>
            <span className="siFeatures">
               1 phòng tắm 21m2 1 giường đôi
            </span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!                
            </span>

        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>


            </div>
            <div className="siDetailTexts">
                <span className="siPrice">1.250.000 VND</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See availability</button>
            </div>
        </div>
    </div>
    
  )
}

export default SearchItem