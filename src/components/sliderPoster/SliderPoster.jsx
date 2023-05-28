import React, { useEffect, useState,} from 'react'
import { useNavigate } from 'react-router-dom'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'


import './SliderPoster.scss';
import { Link } from 'react-router-dom';
import useFetch from '../../customHooks/useFetch'




const SliderPoster = () => {
    
    const { data, isLoading} = useFetch("/movie/popular");

    return (
        <div className="slider-poster">
            
            {
                isLoading ?
                    // <div className="swiper">
                    //     <SkeletonTheme color='#202020' highlightColor='#444' >
                    //         <Skeleton height={500} />
                    //     </SkeletonTheme>
                    // </div>
                    <div className={window.innerWidth<=600 ? "skl-container skeleton" : "skl-container"}>
                            <div className="skl-about">
                                <div className="skl-title skeleton"></div>
                                <div className="skl-rate skeleton"></div>
                                <div className="skl-des skeleton"></div>
                            </div>
                            <div className="skl-card skeleton">

                            </div>
                    </div>
                    :
                    <SlidingCarousel movieList={data?.results} />
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
            // autoplay={{ delay: 3000 }}
            loop
            pagination
        >
            {
                movieList?.map((movie) => (
                    <SwiperSlide key={movie?.id}>
                        <div className="poster-container" onClick={()=>{Navigate(`/movie/${movie?.id}`)}}>

                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                <div className="poster-details">
                                    <div className="poster-about">

                                        <h1 className='poster-title'>{movie ? movie.original_title : ""}</h1>
                                        <span className='poster-relDate'> {movie ? movie.release_date : ""} </span>
                                        <span className='poster-rate'> {movie ? movie.vote_average : ""} <i className='fa-solid fa-star'></i> </span>
                                        <p className='poster-overview'>{movie ? movie.overview : ""}</p>
                                        <button className='btn' onClick={()=>{Navigate(`/movie/${movie.id}`)}}>Get Details</button>

                                    </div>
                                    <div className="poster-card">
                                        <Link to={`/movie/${movie?.id}`}><img src={`https://image.tmdb.org/t/p/original${movie && movie.poster_path}`} /></Link>
                                    </div>
                                </div>

                            {/* </Link> */}
                        </div>

                    </SwiperSlide>
                ))
            }
        </Swiper>

    )
}

export default SliderPoster