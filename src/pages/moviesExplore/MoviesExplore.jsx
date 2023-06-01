import React from 'react'

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


import Cards from '../../components/cards/Cards';
import './MoviesExplore.scss'
import useFetch from '../../customHooks/useFetch';
const MovieList = () => {

    const {render,inputData} = useSearchBox();
    const { type } = useParams();
    const {data, isLoading, error} = useFetch(`/movie/${type ? type : popular}`);


    // let getFilterData = data?.results?.filter(movie => {
    //     return movie?.original_title?.toLowerCase().includes(inputData?.toLowerCase())
    // })
    
    return (
        <div className='movielist-container'>
            <div className="wrapper">

            <div className="inner-container">
                <div className="top-items">
            <h4 className="movie-typeText">{(type ? type : "").toUpperCase()} </h4>
             {render}

                </div>
                {

                    data?.results ?

                        (data?.results.map((movie, index) => (
                            isLoading ?
                                // <SkeletonSt index={index}/>
                                <div className="card-box" key={movie.id}>
                                    <div className="card-imgBox skeleton"></div>
                                </div>

                                :
                                <Cards key={movie?.id} movieData={movie} />
                        )))
                        :
                        <h4>No results found !</h4>
                }
            </div>
            </div>
        </div>
    )
}
const useSearchBox = () =>{
        const [inputData, setInputData] = useState("");
    return{
        inputData,
        render:(
            <div className="search-box">
                <input type="search" placeholder='search...' className='text-area' value={inputData} onChange={(e) => setInputData(e.target.value)} />
                <button>Search Here</button>
            </div>
    )}
}
// const SkeletonSt = ({index}) => {
//     return (
//         <SkeletonTheme key={index} baseColor='#202020' highlightColor='#444'>
//             <div className="skeleton-card-box">
//                 <Skeleton height={275} />

//             </div>
//         </SkeletonTheme>

//     )
// }
export default MovieList