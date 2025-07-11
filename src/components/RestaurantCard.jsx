import React, { useContext } from "react";
import { CDN_URL } from "../utils/constants.js";
import UserContext from "../utils/UserContext.js";

const RestaurantCard = (props) => {
  const {loggedInUser}=useContext(UserContext);
  const { resData } = props;  
  const { name, cuisines, cloudinaryImageId, avgRating, costForTwo } =
    resData.info;
  const { deliveryTime } = resData.info.sla;

  return (
    <div className="w-[240px] bg-white rounded-lg shadow p-4 flex flex-col items-center hover:shadow-lg transition-shadow">
      <img
        className="w-full h-36 object-cover rounded-md mb-3"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-semibold text-gray-800 text-lg mb-1 text-center">
        {name}
      </h3>
      <h4 className="text-gray-500 text-sm mb-1 text-center">
        {cuisines.join(", ")}
      </h4>
      <div className="flex items-center gap-2 text-sm mb-1">
        <span className="text-yellow-500 font-medium">{avgRating}★</span>
        <span className="text-gray-400">|</span>
        <span className="text-gray-600">{costForTwo}</span>
      </div>
      <h4 className="text-blue-600 text-xs">{deliveryTime} min</h4>
    </div>
  );
};

export const withPromotedLabel=(RestaurantCard)=>{
  return(props)=>{
    return(
      <div>
      <label className="absolute bg-black text-white m-2 p-2 rounded-b-lg">Promoted</label>
      <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
