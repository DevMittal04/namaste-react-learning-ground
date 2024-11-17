import { CDN_URL } from "../utils/constants";

// Functional Components are nothing but JS Functions
const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  return (
    <div className="card">
      <img
        src={`${CDN_URL}${cloudinaryImageId}`}
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard