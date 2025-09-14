import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //Local state variable - super powerful variable
  const [searchText, setSearchText] = useState("");

  // whenever state variable updates, react triggers a reconciliation cycle(re-renders the component)

  // Custom hook provides data
  const { listOfRes, filteredRes, setFilteredRes } = useRestaurants();

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Look's like you are offline!! please check your internet connection.
      </h1>
    );

  // consitional rendering

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // filter the restrauent cards and update the UI
              // searchText
              const filteredList = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
            <button
          className="px-4 py-1 bg-gray-100 rounded-lg"
          onClick={() => {
            // Filter logic
            const filteredList = listOfRes.filter(
              (res) => res.info.avgRating > 4.2
            );
            console.log(filteredList);
            setFilteredRes(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRes.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {" "}
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
