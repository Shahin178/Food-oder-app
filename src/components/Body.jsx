import React, { use, useContext, useEffect } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantsCardPromoted=withPromotedLabel(RestaurantCard);

  const { setUserInfo, loggedInUser } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2642598&lng=77.412038&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
    );
    const json = await data.json();

    //optional chaining to avoid errors if the structure changes
    // setListOfRestaurants(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );

    const restaurants =
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      [];

    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  const onlineStatus= useOnlineStatus();
  if(!onlineStatus) return <h1>Looks like you are Offline!! Please check your internet connection</h1>

return listOfRestaurants.length === 0 ? (
  <Shimmer />
) : (
  <div className="body bg-gray-50 min-h-screen">
    <div className="flex justify-between items-center px-8 py-6 bg-white rounded-lg shadow mb-6 max-w-7xl mx-auto">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          data-testid="search-input"
          className="search-box px-4 py-2 border border-blue-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-300 bg-blue-50 text-gray-700"
          placeholder="Search for restaurants"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn px-5 py-2 bg-blue-500 text-white rounded-r-md font-semibold hover:bg-blue-600 transition"
          onClick={() => {
            const searchData = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(searchData);
          }}
        >
          Search
        </button>
      </div>
      <button
        className="filter-btn px-6 py-2 bg-yellow-400 text-white rounded-md font-semibold shadow hover:bg-yellow-500 transition"
        onClick={() => {
          const filterData = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4
          );
          setFilteredRestaurants(filterData);
        }}
      >
        Top Rated Restaurants
      </button>
      <div>
        <label>Username : </label>
        <input
          className="border border-black p-2 m-1"
          value={loggedInUser}
          onChange={(e) => setUserInfo(e.target.value)}
        />
      </div>
    </div>
    <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
      {filteredRestaurants.map((res) => (
        <Link to={"/restaurant/" + res.info.id} key={res.info.id}>
          {res.info.isOpen ? (
            <RestaurantsCardPromoted resData={res} />
          ) : (
            <RestaurantCard resData={res} />
          )}
        </Link>
      ))}
    </div>
  </div>
);
};

export default Body;
