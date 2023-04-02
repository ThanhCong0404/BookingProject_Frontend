import useFetch from "../../hooks/useFetch";
import "./PropertyList.css";

const PropertyList = () => {
    
    const {data,loading,error} = useFetch("/hotels/countByType"); //proxy root config in packake.json

    const images = [
       " https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       
       " https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       
       " https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       
       " https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       
       " https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]

  return (
    <div className="pList">
        { loading ? "loading..." : 
        <>
        { data && images.map((image,i)=> (
            <div className="pListItem" key={i}>
                <img src={image} alt="" className="pListImg"/>
                <div className="pListTitles">
                    <h1>{data[i]?.type}</h1>
                    <h2>{data[i]?.count} {data[i]?.type} </h2>
                </div>
            </div>
        ))}
        
        </>
        }
    </div>
    
    )
}

export default PropertyList