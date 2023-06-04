import React from "react";
import { useParams } from "react-router-dom";
import "./Details.scss";

import useFetch from "../../customHooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import VideosSection from "./videosSection/VideosSection";
import Cast from "./cast/Cast";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";

const Details = () => {
    const { id } = useParams();
    const { data, isLoading } = useFetch(`/movie/${id}/videos`);
    const { data: credits, isLoading: creditsLoading } = useFetch(`/movie/${id}/credits`);

    return (
        <div>
            <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
            <VideosSection data={data} loading={isLoading} />
            <Cast data={credits?.cast} isLoading={creditsLoading} />
            <Similar id={id} />
            <Recommendation id={id} />
        </div>
    );
};

export default Details;
