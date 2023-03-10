import "./MailList.css"

const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">Tiết kiệm thời gian,chi phí !</h1>
        <span className="mailDesc">Đăng ký ngay! Chúng tôi sẽ gửi thông tin các deals tốt nhât cho bạn !!!</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Nhập Email" />
            <button>Đăng Ký</button>
        </div>
    </div>
  )
}

export default MailList