import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../../store/wishlistSlice";

import "./DetailsBanner.scss";

import VideoPopup from "../../../components/videoPopup/VideoPopup";
import useFetch from "../../../customHooks/useFetch";
import CircleRating from "../../../components/circleRating/CircleRating";
import Img from "../../../components/lazyLoadImage/Img.jsx";
import PosterFallback from "../../../assets/no-poster.png";

const DetailsBanner = ({ video, crew }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    const { id: movieId } = useParams();
    const dispatch = useDispatch();
    const { wishList } = useSelector((state) => state.wishList);

    const { data, isLoading, error } = useFetch(`/movie/${movieId}`);

    const isFavorite = wishList.some((favMovie) => favMovie.id.toString() === movieId);

    const handleToggleFavorite = () => {
        if (isFavorite) {
            dispatch(remove(data));
        } else {
            dispatch(add(data));
        }
    }



    const director = crew?.filter((f) => f.job === "Director");
    const writer = crew?.filter(
        (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
    );

    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };

    return (
        <div className="detailsBanner">
            {!isLoading ? (
                <>
                    {!!data && (
                        <React.Fragment>
                            <div className="backdrop-img">
                                <Img src={`https://image.tmdb.org/t/p/original${data ? data?.backdrop_path : ""}`} />
                            </div>
                            <div className="opacity-layer"></div>
                            <div className="wrapper">
                                <div className="content">
                                    <div className="left">
                                        {data?.poster_path ? (
                                            <Img
                                                className="posterImg"
                                                src={`https://image.tmdb.org/t/p/original${data ? data?.poster_path : ""}`}
                                            />
                                        ) : (
                                            <Img
                                                className="posterImg"
                                                src={PosterFallback}
                                            />
                                        )}
                                    </div>
                                    <div className="right">
                                        <div className="title">
                                            {`${!!data?.title ? data?.title : "Title"
                                                } (${!!data?.release_date ? data?.release_date : "Date"})`}
                                        </div>
                                        <div className="subtitle">
                                            {data?.tagline}
                                        </div>


                                        <div className="overview">
                                            <div className="heading">
                                                Overview
                                            </div>
                                            <div className="description">
                                                {data?.overview}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <CircleRating
                                                rating={data?.vote_average?.toFixed(
                                                    1
                                                )}
                                            />
                                            <div
                                                className="playbtn"
                                                onClick={() => {
                                                    setShow(true);
                                                    setVideoId(video.key);
                                                }}
                                            >
                                                <i className="fa fa-play" aria-hidden="true"></i>
                                                <span className="text">
                                                    Watch Trailer
                                                </span>
                                            </div>
                                            <div className={isFavorite ? "card-favourite on" : "card-favourite"} onClick={handleToggleFavorite}>
                                                <i className="fa-solid fa-heart"></i>
                                            </div>
                                        </div>

                                        <div className="info">
                                            {data.status && (
                                                <div className="infoItem">
                                                    <span className="text bold">
                                                        Status:{" "}
                                                    </span>
                                                    <span className="text">
                                                        {data.status}
                                                    </span>
                                                </div>
                                            )}
                                            {data?.release_date && (
                                                <div className="infoItem">
                                                    <span className="text bold">
                                                        Release Date:{" "}
                                                    </span>
                                                    <span className="text">
                                                        {data?.release_date}
                                                    </span>
                                                </div>
                                            )}
                                            {data?.runtime && (
                                                <div className="infoItem">
                                                    <span className="text bold">
                                                        Runtime:{" "}
                                                    </span>
                                                    <span className="text">
                                                        {toHoursAndMinutes(
                                                            data?.runtime
                                                        )}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {director?.length > 0 && (
                                            <div className="info">
                                                <span className="text bold">
                                                    Director:{" "}
                                                </span>
                                                <span className="text">
                                                    {director?.map((d, i) => (
                                                        <span key={i}>
                                                            {d.name}
                                                            {director.length -
                                                                1 !==
                                                                i && ", "}
                                                        </span>
                                                    ))}
                                                </span>
                                            </div>
                                        )}

                                        {writer?.length > 0 && (
                                            <div className="info">
                                                <span className="text bold">
                                                    Writer:{" "}
                                                </span>
                                                <span className="text">
                                                    {writer?.map((d, i) => (
                                                        <span key={i}>
                                                            {d.name}
                                                            {writer.length -
                                                                1 !==
                                                                i && ", "}
                                                        </span>
                                                    ))}
                                                </span>
                                            </div>
                                        )}

                                        {data?.created_by?.length > 0 && (
                                            <div className="info">
                                                <span className="text bold">
                                                    Creator:{" "}
                                                </span>
                                                <span className="text">
                                                    {data?.created_by?.map(
                                                        (d, i) => (
                                                            <span key={i}>
                                                                {d.name}
                                                                {data
                                                                    ?.created_by
                                                                    .length -
                                                                    1 !==
                                                                    i && ", "}
                                                            </span>
                                                        )
                                                    )}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <VideoPopup
                                    show={show}
                                    setShow={setShow}
                                    videoId={videoId}
                                    setVideoId={setVideoId}
                                />
                            </div>
                        </React.Fragment>
                    )
                    }
                </>
            ) : (
                <div className="detailsBannerSkeleton">
                    <div className="wrapper">
                        <div className="left skeleton"></div>
                        <div className="right">
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetailsBanner;
