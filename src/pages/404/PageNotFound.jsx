import React from "react";

import "./PageNotFound.scss";

const PageNotFound = () => {
    return (
        <div className="pageNotFound">
            <div className="wrapper">
                <span className="bigText">404</span>
                <span className="smallText">Page not found!</span>
            </div>
        </div>
    );
};

export default PageNotFound;
