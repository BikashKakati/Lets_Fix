import React, { useEffect, useState, } from 'react'
import { useNavigate } from 'react-router-dom'
import Img from '../lazyLoadImage/Img'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import FallbackImg from '../../assets/no-poster.png'
import networkError from '../../assets/networkError.png'

import './SliderPoster.scss';
import useFetch from '../../customHooks/useFetch'




const SliderPoster = () => {

    const { data, isLoading, error } = useFetch("/movie/popular");

    return (
        <div className="slider-poster">
            {
                isLoading ?
                    <div className={window.innerWidth <= 600 ? "skl-container skeleton" : "skl-container"}>
                        <div className="skl-about">
                            <div className="skl-title skeleton"></div>
                            <div className="skl-rate skeleton"></div>
                            <div className="skl-des skeleton"></div>
                        </div>
                        <div className="skl-card skeleton">

                        </div>
                    </div>
                    :
                    <>
                        {
                            !!error ?
                                (
                                    <div className="netError-box">
                                        <div className="netError-img">
                                            <img src={networkError} />
                                            <span className="netError-text">You're Offline</span>
                                            <p className='sub-text'>Check your network connection properly</p>
                                        </div>
                                    </div>)
                                :
                                <SlidingCarousel movieList={data?.results} />
                        }
                    </>
            }
        </div>


    )
}

const SlidingCarousel = ({ movieList }) => {
    const Navigate = useNavigate();
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            speed={2}
            autoplay={{ delay: 3000 }}
            loop
            pagination
        >
            {
                movieList?.map((movie) => {
                    const imgLink = movie?.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : FallbackImg;

                    return (

                        <SwiperSlide key={movie?.id}>
                            <div className="poster-container" onClick={() => { Navigate(`/details/${movie?.id}`) }}>

                                <Img src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} />
                                <div className="poster-details">
                                    <div className="poster-about">

                                        <h1 className='poster-title'>{movie ? movie.original_title : ""}</h1>
                                        <span className='poster-relDate'> {movie ? movie.release_date : ""} </span>
                                        <span className='poster-rate'> {movie ? movie.vote_average : ""} <i className='fa-solid fa-star'></i> </span>
                                        <p className='poster-overview'>{movie ? movie.overview : ""}</p>
                                        <button className='btn' onClick={() => { Navigate(`/details/${movie.id}`) }}>Get Details</button>

                                    </div>
                                    <div className="poster-card" onClick={() => { Navigate(`/details/${movie?.id}`) }}>
                                        <img src={imgLink} />
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                    )
                }

                )
            }
        </Swiper>

    )
}

export default SliderPoster
