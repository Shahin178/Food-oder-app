import React from "react";
import { CDN_URL } from "../utils/constants.js";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, cloudinaryImageId, avgRating, costForTwo } =
    resData.info;
  const { deliveryTime } = resData.info.sla;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} min</h4>
    </div>
  );
};

export default RestaurantCard;
