import "./SearchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://images.pexels.com/photos/15760049/pexels-photo-15760049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="siImg"/>
        <div className="siDesc">
            <h1 className="siTitle">Dalat Wind Hotel</h1>
            <span className="siDistance">Cách trung tâm 0,7km</span>
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
            <div className="siRating">
                <span>Tuyệt</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">1.250.000 VND</span>
                <span className="siTaxOp">Đã bao gồm thuế và phí</span>
                <button className="siCheckButton">Xem chổ trống</button>
            </div>
        </div>
    </div>
    
  )
}

export default SearchItem