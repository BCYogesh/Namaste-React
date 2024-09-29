import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();

    const handleCart = (item) => {
        // dispatch an action
        dispatch(addItem(item));
    };
    return (
        <div>
            {/** Menu Item list */}

            {items.map((item) => (
                <div
                    data-testid="foodItems"
                    key={item.card.info.id}
                    className="my-4 p-2 border-gray-200 border-b-2 text-left"
                >
                    <div className="flex justify-between">
                        <div className="py-2 w-9/12">
                            <span className="font-medium">{item.card.info.name} -</span>
                            <span className="ml-2">
                                ₹
                                {!item.card.info.price
                                    ? item.card.info.defaultPrice / 100
                                    : item.card.info.price / 100}
                            </span>
                            <p className="text-xs mt-2">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4">
                            <div className="absolute">
                                {!item.card.info.imageId ? (
                                    ""
                                ) : (
                                    <button
                                        type="button"
                                        className="p-2 mx-10 my-20 font-bold shadow-lg bg-white text-green-500 rounded-lg"
                                        onClick={() => handleCart(item)}
                                    >
                                        Add +
                                    </button>
                                )}
                            </div>
                            {!item.card.info.imageId ? (
                                <span className="font-bold text-xs">
                                    Next available at 8:55 am, tomorrow
                                </span>
                            ) : (
                                <img
                                    className="w-full"
                                    src={CDN_URL + item.card.info.imageId}
                                    alt="menu-img"
                                />
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
