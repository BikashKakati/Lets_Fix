import React from 'react'
import { useNavigate } from 'react-router-dom'

import Cards from '../cards/Cards';
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'


import './CategorySlider.scss';
import useFetch from '../../customHooks/useFetch';



const CategorySlider = ({ title, endPoint }) => {
    const Navigate = useNavigate();
    const { data, isLoading, error } = useFetch(`/movie/${endPoint}`);


    return (
        <div className="cat-slider">

            <div className="wrapper">
                <div className="title-box">
                    <h4 className='cat-type'>{title}</h4>
                    <button className='btn' onClick={() => { Navigate(`/explore/${endPoint && endPoint}`) }}>  View More </button>

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
                        data?.results?.map((movie) => {
                            return (
                                <SwiperSlide key={movie.id}>
                                    {isLoading ? 
                                    <div className="card-box ">
                                        <div className="card-imgBox skeleton">

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