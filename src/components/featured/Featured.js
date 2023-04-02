
import useFetch from "../../hooks/useFetch"
import "./Featured.css"

const Featured = () => {
    const {data,loading,error} = useFetch("/hotels/countByCity?cities=HCM,HN,DaNang"); //proxy root config in packake.json

  return (
    <div className="featured">
        { loading ? "Please wait..." : 
        
        <>     
            <div className="featuredItem">
                <img src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Hồ Chí Minh</h1>
                    <h2>{data[0]} chỗ nghĩ</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Hà Nội</h1>
                    <h2>{data[1]} chỗ nghĩ</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Đà Nẵng</h1>
                    <h2>{data[2]} chỗ nghĩ</h2>
                </div>
            </div>
        </>}
    </div>
  )
}

export default Featured