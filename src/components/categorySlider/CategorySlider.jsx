import React from 'react'
import { useNavigate } from 'react-router-dom'

import Cards from '../cards/Cards';
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'


import './CategorySlider.scss';
import useFetch from '../../customHooks/useFetch';



const CategorySlider = ({ type }) => {
    const Navigate = useNavigate();
    const { data, isLoading, error } = useFetch(`/movie/${type}`);


    return (
        <div className="cat-slider">

            <div className="wrapper">
                <div className="title-box">
                    <h4 className='cat-type'>{type.toUpperCase()}</h4>
                    <button className='btn' onClick={() => { Navigate(`/movies/${type ? type : "top_rated"}`) }}>  View More </button>

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
                                    {isLoading ? 
                                    <div className="cat-cardBox ">
                                        <div className="cat-imgBox skeleton">

                                        </div>
                                    </div>
                                    :
                                    <Cards movieData={movie} />
                                    }
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>

        </div>
    )

}


export default CategorySlider