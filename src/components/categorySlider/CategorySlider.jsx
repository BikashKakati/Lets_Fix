import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'


import './CategorySlider.scss';
import { Link } from 'react-router-dom';
import useFetch from '../../customHooks/useFetch';
 


const CategorySlider = ({ type }) => {
    const Navigate = useNavigate();
    const {data, isLoading, error} = useFetch(`/movie/${type}`);


    return (
        <div className="cat-slider">
            
        <div className="wrapper">
            <div className="title-box">
                <h4 className='title'>{type?.toUpperCase()}</h4>
                <button className='btn' onClick={()=>{Navigate(`/movies/${type ? type : "top_rated"}`)}}>  View More </button>

            </div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={"auto"}
                // speed={2}
                // autoplay={{ delay: 3000 }}
                loop
                navigation={{ clickable: true }}
                spaceBetween={10}
            >
                {
                    data?.results?.map((movie, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <CatSliderBox movie={movie} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
        
        </div>
    )

}
const CatSliderBox = ({ movie }) => {
    const { id, poster_path, original_title, vote_average, overview } = movie
    return (
        <div className="cat-card-box">
            <Link to={`/movie/${id}`}>

                <img src={`https://image.tmdb.org/t/p/original${movie && poster_path}`} />

                <div className="cat-card-about">
                    <h4>{movie ? original_title : ""}</h4>
                    <span> {movie ? vote_average : ""} <i className='fa-solid fa-star'></i> </span>
                    <p>{movie ? overview.slice(0, 100) + "...." : ""}</p>
                </div>

            </Link>
        </div>
    )
}

export default CategorySlider