import React, { useEffect } from 'react'

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Cards from '../../components/cards/Cards';
import noResultsFound from '../../assets/no-results.png';
import './MoviesExplore.scss'
import useFetch from '../../customHooks/useFetch';


const MovieList = () => {


    const [movieData, setMovieData] = useState(null);
    const { type } = useParams();
    const { data, isLoading, error } = useFetch(`/movie/${type ? type : popular}`);
    const [inputData, setInputData] = useState("");
    const [sortCallback, setSortCallback] = useState(() => () => { });

    useEffect(() => {
        setMovieData(data?.results);
    }, [data])

    let getFilterData = movieData?.filter(movie => {
        return movie?.original_title?.toLowerCase().includes(inputData.toLowerCase())
    })

    const handleSortingMenu = () => {
        document.querySelector(".sortingTypes-list").classList.toggle("on")
    }
    document.querySelectorAll(".type").forEach(type => {
        type.onclick = () => {
            document.querySelector(".sorting-box .sort-text").innerText = type.innerText
        }
    })



    return (
        <div className='movielist-container'>
            <div className="wrapper">

                <div className="top-items">
                    <h4 className="movie-typeText">{type === "popular" ? "Most Popular" :type === "top_rated" ? "Top Rated" : "Upcoming"} </h4>
                    <div className="action-box" >
                        <div className="sorting-box" onClick={handleSortingMenu}>
                            <span className='sort-text'>sort</span>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                        <ul className="sortingTypes-list">
                            <li className="type" onClick={() => setSortCallback(() => () => { })}>Remove Sorting</li>
                            <li className="type" onClick={() => setSortCallback(() => (a, b) => a.vote_average - b.vote_average)}>Rating Ascending</li>
                            <li className="type" onClick={() => setSortCallback(() => (a, b) => b.vote_average - a.vote_average)}>Rating Descending</li>
                            <li className="type" onClick={() => setSortCallback(() => (a, b) => a.original_title.localeCompare(b.original_title))}>A-Z</li>
                            <li className="type" onClick={() => setSortCallback(() => (a, b) => b.original_title.localeCompare(a.original_title))}>Z-A</li>
                        </ul>
                        <div className="search-box">
                            <input type="search" placeholder='search...' className='text-area' value={inputData} onChange={(e) => setInputData(e.target.value)} />
                        </div>
                    </div>

                </div>
                <div className="inner-container">
                    {

                        !!getFilterData?.length ?
                            (getFilterData.sort(sortCallback)?.map((movie) => (
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