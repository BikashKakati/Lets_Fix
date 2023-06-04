import React from "react";

import Carousel from "../../../components/carousels/Carousels";
import useFetch from "../../../customHooks/useFetch";

const Recommendation = ({ id }) => {
    const { data, isLoading } = useFetch(`/movie/${id}/recommendations`);

    return (
        <Carousel data = {data} isLoading={isLoading} title="Recommendations"/>
    );
};

export default Recommendation;
