import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";
import { useState } from "react";

// no key <<<<<<<<<<<<<< index key (last option) <<< unique key
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList)

  const handleRatedRestaurantsFilter = () => {
    setListOfRestaurants(prev =>
      prev.filter((restaurant) => restaurant.data.avgRating > 4)
    )
  }


  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleRatedRestaurantsFilter}>Top Rated Restaurants</button>
      </div>
      <div className="restaurant-list">
        {listOfRestaurants?.map((restaurant) => (
          <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;