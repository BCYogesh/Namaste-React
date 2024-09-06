import { CDN_URL } from "../utils/constants"

const RestaruantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } = resData.info;
  return (
    <div className="res-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating + " stars"}</h4>
      <h4>{sla.slaString}</h4>
    </div>

  );
};

export default RestaruantCard;