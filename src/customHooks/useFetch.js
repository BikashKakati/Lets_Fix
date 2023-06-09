
import { useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (dataUrl) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let subscribe = true;
    setIsLoading(true);

    fetchDataFromApi(dataUrl)
      .then((res) => {
        if (res.code === "ERR_NETWORK") {
          setIsLoading(false);
          setError("Something went Wrong!");
        }
        if(subscribe){
          setData(res);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setError("Something went Wrong!");
      })

    return () => {
      subscribe = false;
    }
  }, [dataUrl]);

  return { data, isLoading, error };
}
export default useFetch;