import { Link } from "react-router-dom"
import "./SearchItem.css"

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
        <img src={item.photos[0]} alt="" className="siImg"/>
        <div className="siDesc">
            <h1 className="siTitle">{item.name}</h1>
            <span className="siDistance">Cách trung tâm {item.distance}m</span>
            <span className="siTaxiOp">Chỗ đỗ xe miễn phí</span>
            <span className="siSubtitle">
                Chỗ nghỉ Du lịch Bền vững 
            </span>
            <span className="siFeatures">
                Phòng Tiêu Chuẩn Giường Đôi
            </span>
            <span className="siCancelOp">Miễn Phí hủy phòng • Không cần thanh toán trước</span>
            <span className="siCancelOpSubtitle">
                Bạn có thể hủy sau, nên hãy đặt ngay hôm nay để có giá tốt.              
            </span>

        </div>
        <div className="siDetails">
           { item.rating &&  <div className="siRating">
                <span>Tuyệt</span>
                <button>{item.rating}</button>
            </div>}
            <div className="siDetailTexts">
                <span className="siPrice">{item.cheapestPrice} VND</span>
                <span className="siTaxOp">Đã bao gồm thuế và phí</span>
                
                <Link to={`/hotels/${item._id}`}>
                    <button className="siCheckButton">Xem chổ trống</button>
                </Link>
            </div>
        </div>
    </div>
    
  )
}

export default SearchItem