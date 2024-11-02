import React from "react";
import { MdEditNote } from "react-icons/md";
import { useState } from "react";

function ProductCard({ product }) {
  const { name, image, price, stock } = product;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-[13rem] h-[17rem] border-2 border-Border rounded-lg flex flex-col items-center">
      <div className="badge badge-outline absolute left-2 top-2 text-[0.8rem] border-Border border-[2px] text-LightText">
        Stock: {stock}
      </div>
      <figure className="flex flex-col items-center p-2">
        <img src={image} alt={name} className="w-[8rem] h-[8rem]" />
        <p className="text-center leading-[1.3] min-h-10 flex">{name}</p>
      </figure>
      <p className="text-LightText text-[0.9rem]">₱{price}</p>

      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-Primary flex items-center justify-center gap-1 text-Primary bg-opacity-20 w-full h-[3.2rem] mt-auto 
        hover:text-neutral-50 hover:bg-opacity-100 rounded-b-lg transition-colors duration-200"
      >
        <MdEditNote
          size={22}
          style={{ fill: isHovered ? "#ffffff" : "#da0054" }}
        />
        Edit Product
      </button>
    </div>
  );
}
export default ProductCard;
