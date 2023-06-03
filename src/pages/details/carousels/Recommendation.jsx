import React from "react";

import Carousel from "../../../components/categorySlider/CategorySlider";

const Recommendation = ({ id }) => {

    return (
        <Carousel
            title="Recommendations"
            endpoint={`${id}/recommendations`}
        />
    );
};

export default Recommendation;
