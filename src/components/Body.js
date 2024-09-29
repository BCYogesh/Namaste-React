import RestaruantCard, { addDiscount } from "./RestaruantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaruant, setListOfRestaruant] = useState([]);
  const [filteredRestaruant, setFilteredRestaruant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const HaveDiscountText = addDiscount(RestaruantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.93270&lng=78.11410&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    //console.log(json);

    setListOfRestaruant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaruant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    //console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  const status = useOnlineStatus();

  const { setUserName, loggedInUser } = useContext(UserContext);

  if (status === false) return <h1>Offline check your internect connection</h1>;

  return listOfRestaruant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body px-8">
      <div className="flex my-6">
        <div className="search">
          <input
            className="p-2 px-6 border border-solid border-black rounded-2xl"
            type="text"
            data-testid="searchInput"
            placeholder="Search Restarurant"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="p-2 px-6 mx-1 border border-solid bg-blue-400 rounded-lg text-stone-100 font-bold"
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
        <div className="topRestaurant ml-20">
          <button
            className="p-2 px-6 border border-solid bg-red-400 rounded-lg text-stone-100 font-bold"
            type="button"
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
        <div className="topRestaurant ml-20">
          <label>UserName : </label>
          <input
            type="text"
            className="p-2 border border-black"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap px-15 gap-11">
        {filteredRestaruant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {!restaurant.info.aggregatedDiscountInfoV3 ? (
              <HaveDiscountText resData={restaurant} />
            ) : (
              <RestaruantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
