import { CDN_URL } from "../utils/constants";

const ItemList =({items})=>{
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="py-4 px-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
        >
          <div>
            <div className="py-2" >
              <span className="font-bold text-gray-500">{item.card.info.name}</span>
              <span className="block font-medium"> ₹{item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="flex flex-col items-center min-w-[120px] relative">
            {item.card.info.imageId && (
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-28 h-20 object-cover mb-2 rounded border"
                alt={item.card.info.name}
              />
            )}
            <button className="bg-white shadow text-green-500 rounded-xl border border-gray-200 font-bold hover:bg-gray-100 px-6 py-2 absolute bottom-[-10px]">
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );

}

export default ItemList;