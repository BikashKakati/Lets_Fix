import React from "react";

import Carousel from "../../../components/carousels/Carousels";
import useFetch from "../../../customHooks/useFetch";

const Recommendation = ({ id }) => {
    const { data, isLoading, error } = useFetch(`/movie/${id}/recommendations`);

    return (
        <>
            {!error && (
                <React.Fragment>
                    {
                        !!data?.results?.length && <Carousel data={data} isLoading={isLoading} title="Recommendations" />
                    }
                </React.Fragment>
            )

            }
        </>

    );
};

export default Recommendation;
