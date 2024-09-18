import { CDN_URL } from "../utils/constants"

const RestaruantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } = resData.info;
  return (
    <div className="border border-gray-95 bg-gray-50 w-72 my-4 hover:shadow-lg hover:bg-kn-[150px] rounded-lg">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="h-48 w-full object-cover rounded-tr-lg rounded-tl-lg"
      />
      <div className="p-4 leading-9">
        <h3><b>{name}</b></h3>
        <h4 className="text-wrap">{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating + " stars"}</h4>
        <h4>{sla.slaString}</h4>
      </div>
    </div>
  );
};

export default RestaruantCard;