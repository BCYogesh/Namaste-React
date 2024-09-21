import ItemList from "./ItemList";

const RestaurantCategories = ({ data, showItems, handleClick }) => {


    return (
        <div className="w-6/12 bg-gray-100 my-4 m-auto shadow-lg p-4 ">
            {/** Header */}
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
                <span>{showItems ? "🔽" : "🔼"}</span>
            </div>
            {/** Accordion Body */}
            <span>
                {showItems && <ItemList items={data.itemCards} />}
            </span>
        </div>
    )
}

export default RestaurantCategories;