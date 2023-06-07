import { useState } from 'react';
import { Link } from 'react-router-dom';
import CircleRating from '../circleRating/CircleRating';
import Img from '../lazyLoadImage/Img';
import fallbackImg from '../../assets/no-poster.png';
import './Cards.scss';

import { useDispatch } from 'react-redux';
import { add, remove } from '../../store/wishlistSlice';

const Cards = ({ movieData}) => {
  const [favourite, setFavourite] = useState(false);
  const Dispatch = useDispatch();
  
  const posterImgLink = movieData?.poster_path ? `https://image.tmdb.org/t/p/original${movieData.poster_path}` : fallbackImg;

  const handleAdd = (movieId) =>{
    setFavourite(!favourite);
    !favourite ? Dispatch(add(movieData)) : Dispatch(remove(movieId));
  }
  
  return (

    <div className="card-box">

      <div className="card-imgBox">
        <Link to={`/details/${movieData?.id}`}>

          <Img src={posterImgLink} />
          <CircleRating rating={movieData?.vote_average < 1 ? "1" : movieData?.vote_average?.toFixed(1)} />

        </Link>

      </div>
      <div className="card-aboutBox">

        <div className="card-textBox">
        <h4 className="movie-title">{movieData ? movieData.original_title : ""}</h4>
        <span className="rel-date">{movieData ? movieData.release_date : ""}</span>

        </div>
        <div className={!favourite ? "card-favourite" : "card-favourite on"} onClick={()=>{handleAdd(movieData?.id)}}>
        <i className="fa-solid fa-heart"></i>
        </div>
      </div>
    </div>

  )
}

export default Cards