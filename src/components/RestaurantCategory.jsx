import React, { useState } from 'react'
import ItemList from './itemList';

const RestaurantCategory = ({data}) => {
  const [showItem, setShowitem]= useState(false);
  const handleClick=()=>{
    setShowitem(!showItem);
  }
  
  return (
    <div>
      <div className="w-full my-4 p-4 bg-gray-50 shadow-lg m-auto">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-l pl-4">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="text-black"> ▼ </span>
        </div>
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
}

export default RestaurantCategory