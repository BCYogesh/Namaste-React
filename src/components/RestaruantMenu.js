import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaruantMenu from "../utils/useRestaruantMenu";

const RestaruantMenu = () => {


    const { resId } = useParams();

    const resInfo = useRestaruantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    // menu items
    const { itemCards } =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

    if (!itemCards) return <Shimmer />;

    let { name, cuisines, costForTwoMessage } =
        resInfo?.cards[2]?.card?.card?.info;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(",")} - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - Rs. {item.card.info.price / 100}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaruantMenu;
