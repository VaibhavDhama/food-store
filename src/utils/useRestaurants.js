import { useEffect, useState } from "react";

const useRestaurants = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setListOfRes(restaurants);
    setFilteredRes(restaurants);
  };

  // return both list and setter so that component can use them
  return { listOfRes, filteredRes, setFilteredRes };
};

export default useRestaurants;
