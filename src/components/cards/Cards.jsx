
import { Link } from 'react-router-dom'
import './Cards.scss'

const Cards = ({ movies }) => {

  const { id, poster_path, original_title, vote_average, overview } = movies
  return (
    <>
      {
        <Link to={`/movie/${id}`}>
          <div className="card-box">

            <img src={`https://image.tmdb.org/t/p/original${movies && poster_path}`} />

            <div className="card-about">
              <h4>{movies ? original_title : ""}</h4>
              <span> {movies ? vote_average : ""} <i className='fa-solid fa-star'></i> </span>
              <p>{movies ? overview.slice(0, 100) + "...." : ""}</p>
            </div>

          </div>
        </Link>

      }
    </>
  )
}

export default Cards