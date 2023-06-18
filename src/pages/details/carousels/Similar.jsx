import React from "react";

import Carousel from "../../../components/carousels/Carousels";
import useFetch from "../../../customHooks/useFetch";

const Similar = ({ id }) => {
    const { data, isLoading, error } = useFetch(`/movie/${id}/similar`);

    return (
        <>
            {!error && (
                <React.Fragment>
                    {
                        !!data?.results?.length && <Carousel data={data} isLoading={isLoading} title="Similar" />
                    }
                </React.Fragment>
            )

            }
        </>

    );
};

export default Similar;
