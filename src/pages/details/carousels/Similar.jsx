import React from "react";

import Carousel from "../../../components/categorySlider/CategorySlider";

const Similar = ({ id }) => {

    return (
        <Carousel
            title="Similar"
            endpoint={`${id}/similar`}
        />
    );
};

export default Similar;
