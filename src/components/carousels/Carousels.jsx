import React from 'react'
import { useNavigate } from 'react-router-dom'

import Cards from '../cards/Cards';
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import FavoriteMoviesWrapper from '../../components/FavoriteMoviesWrapper';
import 'swiper/swiper-bundle.css'


import './Carousels.scss';



const CategorySlider = ({data, isLoading, title, endPoint }) => {
    const Navigate = useNavigate();


    return (
        <div className="cat-slider">

            <div className="wrapper">
                <div className="title-box">
                    <h4 className='cat-type'>{title}</h4>
                    {endPoint && <button className='btn' onClick={() => { Navigate(`/explore/${endPoint && endPoint}`) }}>  View More </button>}
                    

                </div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={"auto"}
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
                                    <FavoriteMoviesWrapper>
                                        <Cards movieData={movie} />
                                    </FavoriteMoviesWrapper>
                                    
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