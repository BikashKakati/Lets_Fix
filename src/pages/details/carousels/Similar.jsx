import React from "react";

import Carousel from "../../../components/carousels/Carousels";
import useFetch from "../../../customHooks/useFetch";

const Recommendation = ({ id }) => {
    const { data, isLoading } = useFetch(`/movie/${id}/similar`);

    return (
        <Carousel data = {data} isLoading={isLoading} title="Similar"/>
    );
};

export default Recommendation;
