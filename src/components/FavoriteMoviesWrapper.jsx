import { useEffect } from "react";
import { favoriteMovies } from "../store/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";

const FavoriteMoviesWrapper = ({children}) =>{
    const dispatch = useDispatch();

    const LOCAL_STORAGE_KEY = "wishList";
    
    useEffect(()=>{
      const arr = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      dispatch(favoriteMovies([...arr]));
      // console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
      // 
    },[])

    const {wishList} =useSelector((state)=>state.wishList);

    useEffect(()=>{
        if(wishList){
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(wishList))
        };
    },[wishList])

    return <>{children}</>
}
export default FavoriteMoviesWrapper;