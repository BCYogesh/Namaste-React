import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaruantMenu from "../utils/useRestaruantMenu";
import RestraurantCategory from "./RestarurantCategory";
import { useState } from "react";

const RestaruantMenu = () => {

    const [showIndex, setShowIndex] = useState(null);

    const handleClick = (index) => {
        setShowIndex((prevIndex) => prevIndex === index ? null : index);
    }


    const { resId } = useParams();

    const resInfo = useRestaruantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    // menu items
    const { itemCards } =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

    const categories =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (category) =>
                category?.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

    if (!itemCards) return <Shimmer />;

    let { name, cuisines, costForTwoMessage } =
        resInfo?.cards[2]?.card?.card?.info;

    return (
        <div className="menu text-center">
            <h1 className="font-bold text-2xl my-6">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(",")} - {costForTwoMessage}
            </p>
            {/** Menu Accordion */}

            {/** Controlled Component */}

            {categories.map((category, index) => (
                <RestraurantCategory
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    setShowIndex={() => setShowIndex(index)}
                    showItems={index === showIndex}
                    handleClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
};

export default RestaruantMenu;
