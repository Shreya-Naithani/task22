import { useState,useEffect } from "react";



export const useFetch = (url)=>{
    const [getData ,setGetData]= useState([]);
    const[loading,setLoading] =useState(false);

    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true);
            const res = await fetch(url);
            const data = await res.json();
           
            setGetData(data);
            setLoading(false);
          } catch (error) {
            setLoading(false);
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData(); 
      }, [url]);
      return { getData, loading };
}