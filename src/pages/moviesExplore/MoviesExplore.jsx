import React from 'react'

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Cards from '../../components/cards/Cards';
import noResultsFound from '../../assets/no-results.png';
import './MoviesExplore.scss'
import useFetch from '../../customHooks/useFetch';
const MovieList = () => {


    const { type } = useParams();
    const { data, isLoading, error } = useFetch(`/movie/${type ? type : popular}`);
    const [inputData, setInputData] = useState("");

    let getFilterData = data?.results?.filter(movie => {
        return movie?.original_title?.toLowerCase().includes(inputData.toLowerCase())
    })





    return (
        <div className='movielist-container'>
            <div className="wrapper">

                <div className="inner-container">
                    <div className="top-items">
                        <h4 className="movie-typeText">{(type ? type : "").toUpperCase()} </h4>
                        <div className="search-box">
                            <input type="search" placeholder='search...' className='text-area' value={inputData} onChange={(e) => setInputData(e.target.value)} />
                        </div>

                    </div>
                    {
                        
                        getFilterData?.length > 0 ?
                        ( getFilterData?.map((movie) => (
                            isLoading ?
                                <div className="card-box" key={movie?.id}>
                                    <div className="card-imgBox skeleton"></div>
                                </div>

                                :
                                <Cards key={movie?.id} movieData={movie} />
                        )))
                        :
                        (
                            <div className="no-resultImg">
                                <img src={noResultsFound} />
                            </div>
                        )

                       

                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList