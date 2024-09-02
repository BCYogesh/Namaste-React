import RestaruantCard from "./RestaruantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  // Array destructuring
  const [listOfRestaruant, setListOfRestaruant] = useState(resList);
  
  return (
    <div className="body">
      <div className="filter">
        <button type="button" className="filter-btn" onClick={() => {
          filteredRestaruant = listOfRestaruant.filter((res) => res.info.avgRating >= 4.4)
          setListOfRestaruant(filteredRestaruant);
        }}>Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {
          listOfRestaruant.map((restaurant) => (
            <RestaruantCard key={restaurant.info.id} resData={restaurant} />
          ))
        }
      </div>
    </div>
  );
};

export default Body;