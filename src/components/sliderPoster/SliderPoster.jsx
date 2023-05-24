import React, { useEffect, useState } from 'react'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'


import './SliderPoster.scss';
import { Link } from 'react-router-dom';
import useFetch from '../../customHooks/useFetch'




const SliderPoster = () => {


    const [movieList, setMovieList] = useState([]);
    const {data, isLoading, error} = useFetch("popular");

    useEffect(() =>{
        window.scrollTo(0, 0);
        setMovieList(data?.results);
    },[data]);


    return (

        isLoading ?
        <div className="swiper">
            <SkeletonTheme color='#202020' highlightColor='#444' >
             <Skeleton height={500} />
          </SkeletonTheme>
        </div>
        :
        
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            speed={2}
            autoplay={{ delay: 3000 }}
            loop
            pagination
        >
            {
                movieList?.map((movie, index) => (
                    <SwiperSlide key={index}>
                        <div className="poster-container">

                            <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                            <div className="poster-details">
                                <div className="poster-about">
                                    <h1>{movie ? movie.original_title : ""}</h1>
                                    <span> {movie ? movie.release_date : ""} </span>
                                    <span> {movie ? movie.vote_average : ""} <i className='fa-solid fa-star'></i> </span>
                                    <p>{movie ? movie.overview : ""}</p>
                                    <Link to={`/movie/${movie.id}`}><button>Get Details</button></Link>
                                </div>
                                <div className="poster-card">
                                    <Link to={`/movie/${movie.id}`}><img src={`https://image.tmdb.org/t/p/original${movie && movie.poster_path}`} /></Link>
                                </div>
                            </div>

                        </div>

                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default SliderPoster