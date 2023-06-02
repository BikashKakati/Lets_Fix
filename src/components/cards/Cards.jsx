
import { Link } from 'react-router-dom'
import Img from '../lazyLoadImage/Img';
import fallbackImg from '../../assets/no-poster.png'
import './Cards.scss'

const Cards = ({ movieData}) => {

  const posterImgLink = movieData?.poster_path ? `https://image.tmdb.org/t/p/original${movieData.poster_path}` : fallbackImg;
  
  return (

    <div className="card-box">

      <div className="card-imgBox">
        <Link to={`/movie/${movieData?.id}`}>

          <Img src={posterImgLink} />

        </Link>
      </div>
      <div className="card-aboutBox">
        <h4 className="movie-title">{movieData ? movieData.original_title : ""}</h4>
        <span className="rel-date">{movieData ? movieData.release_date : ""}</span>
      </div>
    </div>

  )
}

export default Cards