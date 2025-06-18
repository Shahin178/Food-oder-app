import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

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

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
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
          className="filter-btn"
          onClick={() => {
            const filterData = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filterData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
