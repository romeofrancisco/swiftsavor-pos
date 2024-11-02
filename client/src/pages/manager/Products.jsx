import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../../store/slices/categories/categoryThunk";
import { fetchProducts } from "../../store/slices/products/productThunk";
import ProductsContainer from "../../components/manager/Products.ProductsContainer";
import CategoryTabs from "../../components/manager/Products.CategoryTabs";

function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="flex-grow px-12 pt-5 pb-8 flex flex-col">
      <h1 className="text-[1.8rem] mb-5 font-medium">Products</h1>
      <div className=" bg-DarkBackground flex-grow rounded-lg px-8 py-6">
        <div>
          <h2 className="text-[1.5rem]">Manage Products</h2>
        </div>
        <CategoryTabs />
        <ProductsContainer />
      </div>
    </div>
  );
}

export default Products;
