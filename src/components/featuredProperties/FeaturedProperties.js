import useFetch from "../../hooks/useFetch";
import "./FeaturedProperties.css"

const FeaturedProperties = () => {

  
  const {data,loading,error} = useFetch("/hotels?featured=true&limit=4"); //proxy root config in packake.json

  return (
    <div className="fp">
       { loading ? "Loading..." : 
       <>
       {
        data.map((item) => (
          <div className="fpItem" key={item._id}>
            <img src={item.photos[0]} alt="" className="fpImg"  />
            <span className="fpName">{item.name}</span>
            <span className="fpCity">{item.city}</span>
            <span className="fpPrice"> Giá từ {item.cheapestPrice} vnd</span>
            { item.rating && 
                <div className="fpRating">
                <button>{item.rating}</button>
                <span>TUYET VOI</span>
            </div>}
          </div>
        ))
       }
       
       
       </>}
       
    </div>
  )
}

export default FeaturedProperties