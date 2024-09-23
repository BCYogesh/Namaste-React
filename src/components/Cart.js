import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    if (cartItems.length === 0) return <h1 className="text-center p-4 font-bold text-2xl">Cart is Empty. Add items to the cart.</h1>;

    // dispatch

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }


    return (
        <div className="pt-4 text-center">
            <h1 className="text-2xl font-bold text-center">Cart</h1>
            <button
                type="button"
                className="m-2 font-bold border border-black px-2 py-1 rounded-lg bg-red-300"
                onClick={handleClearCart}
            >
                Clear Cart
            </button>
            <div className="w-6/12 bg-gray-100 my-4 m-auto shadow-lg p-4 ">
                <ItemList items={cartItems} />
            </div>
        </div>
    );
};

export default Cart;
