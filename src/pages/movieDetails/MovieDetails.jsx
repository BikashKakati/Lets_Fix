

import React, { useEffect, useState } from 'react'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import './MovieDetails.scss'
import { useParams } from 'react-router-dom';
import useFetch from '../../customHooks/useFetch';





const MovieDetails = () => {

  const [movieDetails, setMovieDetails] = useState();
  const { id } = useParams()
  const {data, isLoading, error} = useFetch(id);

  useEffect(() =>{
      window.scrollTo(0, 0);
      setMovieDetails(data);
  },[data]);

  return (
    isLoading ?
      <SkeletonTheme color='#202020' highlightColor='#444'>
        <div className="large-container">
          <div className="poster__about__box">
            <div className="poster__card__detail">
              <div className="poster__card">
                <Skeleton height={426} borderRadius ={10}></Skeleton>
              </div>

              <div className="poster__about">
                <h2><Skeleton></Skeleton> </h2>
                <span><Skeleton></Skeleton> </span>
                <span><Skeleton></Skeleton></span>

                <p><Skeleton></Skeleton></p>
              </div>

            </div>
          </div>

        </div>
      </SkeletonTheme>

      :
      <MovieDetailsBox movieDetails = {movieDetails} />

  )
}

const MovieDetailsBox = ({movieDetails}) =>{
  return(
    <div className="large-container">
    <img src={`https://image.tmdb.org/t/p/original${movieDetails ? movieDetails.backdrop_path : ""}`} />
    <div className="poster__about__box">
      <div className="poster__card__detail">
        <div className="poster__card">
          <img src={`https://image.tmdb.org/t/p/original${movieDetails ? movieDetails.poster_path : ""}`} />
        </div>
        <div className="poster__about">
          <h2>{movieDetails ? movieDetails.original_title : ""} </h2>
          <span>{movieDetails ? movieDetails.release_date : ""} </span>
          <span>
            {movieDetails ? movieDetails?.vote_average?.toString().slice(0, 3) : ""}
            <i className='fa-solid fa-star'></i>
          </span>
          <div className='genres'>
            {
              movieDetails && movieDetails.genres ?
                <>
                  {
                    movieDetails?.genres.map((genre, index) => (
                      <span key={index}>{genre.name}</span>
                    ))
                  }
                </>
                : ""
            }
          </div>
          <p>{movieDetails ? movieDetails.overview : ""} </p>
        </div>
      </div>
    </div>

  </div>
  )
}



export default MovieDetails