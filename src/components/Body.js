import RestaruantCard from "./RestaruantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaruant, setListOfRestaruant] = useState([]);
  const [filteredRestaruant, setFilteredRestaruant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.93270&lng=78.11410&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaruant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaruant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaruant.length === 0 ? <Shimmer />
    : (

      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              className="search-box"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              type="button"
              onClick={() => {
                let searchedRestaruant = listOfRestaruant.filter((resData) =>
                  resData.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                );
                setFilteredRestaruant(searchedRestaruant);
              }}
            >
              Search
            </button>
          </div>
          <button
            type="button"
            className="filter-btn"
            onClick={() => {
              let filteredRestaruant = listOfRestaruant.filter(
                (res) => res.info.avgRating >= 4.4

              );
              setFilteredRestaruant(filteredRestaruant);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="res-container">
          {filteredRestaruant.map((restaurant) => (
            <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
              <RestaruantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    );
};

export default Body;
