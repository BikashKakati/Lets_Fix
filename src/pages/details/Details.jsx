import React from "react";
import { useParams } from "react-router-dom";
import "./Details.scss";

import useFetch from "../../customHooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";

const Details = () => {
    const { id } = useParams();
    const { data, loading } = useFetch(`/movie/${id}/videos`);
    const { data: credits, loading: creditsLoading } = useFetch(`/movie/${id}/credits`);

    return (
        <div>
            <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
            <Cast data={credits?.cast} loading={creditsLoading} />
            <Similar id={id} />
            <Recommendation id={id} />
        </div>
    );
};

export default Details;
