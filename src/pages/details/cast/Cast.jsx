import React from "react";

import "./Cast.scss";

import Img from "../../../components/lazyLoadImage/Img";
import avatar from "../../../assets/avatar.png";

const Cast = ({ data, isLoading }) => {

    const skeleton = () => {
        return (
            <div className="skItem">
                <div className="circle skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };
    return (
        <div className="castSection">
            <div className="wrapper">
                <div className="sectionHeading">Top Cast</div>
                {!isLoading ? (
                    <div className="listItems">
                        {data?.map((item) => {
                            let imgUrl = item.profile_path ? `https://image.tmdb.org/t/p/original${item.profile_path}`: avatar;
                            return (
                                <div key={item.id} className="listItem">
                                    <div className="profileImg">
                                        <Img src={imgUrl} />
                                    </div>
                                    <div className="name">{item.name}</div>
                                    <div className="character">
                                        {item.character}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="castSkeleton">
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cast;
