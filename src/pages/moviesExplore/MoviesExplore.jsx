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

    const handleSortingMenu = () =>{
        document.querySelector(".sortingTypes-list").classList.toggle("on")
    }
    document.querySelectorAll(".type").forEach(type =>{
        type.addEventListener("click",()=>{
            document.querySelector(".sorting-box .sort-text").innerText = type.innerText
        })
    })



    return (
        <div className='movielist-container'>
            <div className="wrapper">

                <div className="inner-container">
                    <div className="top-items">
                        <h4 className="movie-typeText">{(type ? type : "").toUpperCase()} </h4>
                        <div className="action-box" onClick={handleSortingMenu}>
                            <div className="sorting-box">
                                <span className='sort-text'>sort</span>
                                <i className="fa-solid fa-chevron-down"></i>
                            </div>
                            <ul className="sortingTypes-list">
                                <li className="type">Rating Descending</li>
                                <li className="type">Rating Ascending</li>
                                <li className="type">A-Z</li>
                                <li className="type">Z-A</li>
                            </ul>
                            <div className="search-box">
                                <input type="search" placeholder='search...' className='text-area' value={inputData} onChange={(e) => setInputData(e.target.value)} />
                            </div>
                        </div>

                    </div>
                    {

                        !!getFilterData?.length ?
                            (getFilterData?.map((movie) => (
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
                                    <span className="noResult-text">Sorry! no results found</span>
                                </div>
                            )



                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList