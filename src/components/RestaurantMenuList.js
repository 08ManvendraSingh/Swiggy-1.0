import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantMenuList = (props) => {
  const { title, itemCards } = props?.data;
  const { showIndex, setShowIndex } = props;

  return (
    <div>
      <div className=" mt-6 mr-2 mb-4 ml-4">
        <button
          onClick={() => setShowIndex()}
          className="w-full flex justify-between pr-4 border-0 cursor-pointer bg-transparent mb-6 text-lg"
        >
          <h3 className="h-5 transition-all text-[#3e4152] font-bold">
            {title} ({itemCards.length})
          </h3>
          <span>🔽</span>
        </button>
        {showIndex && (
          <div className="itemList_accordian_dropdown">
            {itemCards.map((x) => (
              <ItemList key={x?.card?.info?.id} data={x?.card?.info} />
            ))}
          </div>
        )}
      </div>
      <div className="border-b-[16px] border-[#f1f1f6]"></div>
    </div>
  );
};

export default RestaurantMenuList;
