// const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"

import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (dataUrl) =>{
   const[data, setData] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() =>{
     let subscribe = true;
     const fetchData = async(url) =>{
        setIsLoading(true);
        try{
          const {data} = await axios.get(url);
          if(subscribe){
            setData(data);
            setError(null);
          }
        }catch(err){
          if(subscribe){
            
            setError("Network Erro!");
            setData([]);
          }
        }finally{
          subscribe && setTimeout(() => setIsLoading(false),2000);
        }
     }
     fetchData(`https://api.themoviedb.org/3/movie/${dataUrl}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`);

      return() =>{
        subscribe = false;
      }
   },[dataUrl]);
   return{data, isLoading, error};
}
export default useFetch;