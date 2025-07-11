import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex]=useState(0);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  if (!resInfo) {
    return <Shimmer />;
  }

  const categoryCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const {
    name,
    costForTwoMessage,
    cuisines,
    avgRating,
    totalRatingsString,
    sla,
    areaName,
  } = resInfo?.cards?.[2]?.card?.card?.info;
  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="max-w-6/12 mx-auto p-6">
      <div className="mx-auto bg-white rounded-lg shadow-md p-6 mt-2">
        <h1 className="text-2xl font-bold mb-2">{name}</h1>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-green-600 font-semibold">★{avgRating}</span>
          <span className="text-gray-400 text-sm">({totalRatingsString})</span>
          <span className="text-gray-400 text-sm">| {costForTwoMessage}</span>
        </div>
        <p className="text-gray-600 text-sm mb-1">{cuisines.join(", ")}</p>
        <p className="text-gray-500 text-sm mb-1">
          Outlet: <span className="font-medium">{areaName}</span>
        </p>
        <p className="text-green-500 text-sm font-medium">
          {sla.minDeliveryTime}-{sla.maxDeliveryTime} mins delivery
        </p>
      </div>
      <div className="mt-6 rounded-lg shadow-m">
        {categoryCards.map((cat, index) => (
          <RestaurantCategory
            key={cat?.card?.card.title}
            data={cat?.card?.card}
            showItem={index === showIndex && true}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
