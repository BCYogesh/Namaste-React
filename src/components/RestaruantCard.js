import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaruantCard = (props) => {

  const { resData } = props;
  const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } = resData.info;

  const data = useContext(UserContext);

  return (
    <div className="border border-gray-95 bg-gray-50 w-72 my-4 hover:shadow-lg hover:bg-gray-100 rounded-lg">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="h-48 w-full object-cover rounded-tr-lg rounded-tl-lg"
      />
      <div className="p-4">
        <h3 className="mb-2"><b>{name}</b></h3>
        <h4 className="text-wrap">{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating + " stars"}</h4>
        <h4>{sla.slaString}</h4>
        <h2>{data.loggedInUser}</h2>
      </div>
    </div>
  );
};

export const addDiscount = (RestaruantCard) => {
  return (props) => {
    return (
      <div>
        <label>Higher order component</label>
        {/* We are passing all the values we did not modify the value */}
        <RestaruantCard {...props} />
      </div>

    )
  };
};

export default RestaruantCard;