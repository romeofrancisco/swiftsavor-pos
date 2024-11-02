import React from "react";
import { FaPlus } from "react-icons/fa6";
import ProductCard from "./Products.ProductCard";
import { filterProducts } from "../../store/slices/products/productSelector";
import { useSelector } from "react-redux";

function ProductsContainer() {
  const filteredProducts = useSelector(filterProducts());

  return (
    <div className="flex flex-wrap gap-3 py-5">
      <div
        className="w-[13rem] h-[17rem] border-2 border-Primary border-dashed rounded-lg
           flex flex-col gap-5 items-center justify-center cursor-pointer opacity-60 
           hover:opacity-100 transition-opacity duration-200 hover:bg-Primary hover:bg-opacity-10"
      >
        <FaPlus size={22} fill="#da0054" />
        <span className="text-Primary text-lg font-semibold">
          Add New Product
        </span>
      </div>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsContainer;
