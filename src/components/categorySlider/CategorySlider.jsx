import React from 'react'
import { useNavigate } from 'react-router-dom'
import Img from '../lazyLoadImage/Img';
import fallbackImg from '../../assets/no-poster.png'
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
                // spaceBetween={10}
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
    const { id, poster_path, original_title, vote_average, release_date} = movie;
    const imgLink = movie ? `https://image.tmdb.org/t/p/original${movie && poster_path}` : fallbackImg;
    return (
        <div className="cat-cardBox">

        <div className="cat-imgBox">
            <Link to={`/movie/${id}`}>

                <Img src={imgLink} />

            </Link>
        </div>
        <div className="cat-cardAbout">
                    <h4 className="title">{movie ? original_title : ""}</h4>
                    <span className="rel-date">{movie ? release_date: ""}</span>
                    <span className="rate"> {movie ? vote_average : ""} <i className='fa-solid fa-star'></i> </span>
                </div>
        </div>
    )
}

export default CategorySlider