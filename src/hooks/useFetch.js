import axios from "axios";
import { useEffect, useState } from "react"

const useFetch = (url) =>{
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(true);

    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true);
            try {                          
                const res = await axios.get(url);
                setData(res.data);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        }
        fetchData();
    },[url])

    const reFetch = async ()=>{
        setLoading(true);
        try {                          
            const res = await axios.get(url);
            setData(res.data);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    }

    return {data,loading,error,reFetch}
}

export default useFetch;