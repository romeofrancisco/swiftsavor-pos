import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { setCategoryFilter } from "../../store/slices/products/productSlice";
import { useDispatch } from "react-redux";

function CategoryTabs() {
  const { categories } = useSelector((state) => state.categories);
  const [selectedTab, setSelectedTab] = useState(null);
  const dispatch = useDispatch()

  const handleSelectedTab = (e) => {
    const category = e.target.id || null
    setSelectedTab(category)
    dispatch(setCategoryFilter(category))
  };

  return (
    <div role="tablist" className="tabs tabs-bordered justify-center">
      <a
        role="tab"
        className={`tab text-[1.02rem] ${selectedTab == null ? 'tab-active' : ""}`}
        onClick={handleSelectedTab}
      >
        All
      </a>
      {categories.map((category) => (
        <a
          key={category.id}
          id={category.id}
          role="tab"
          className={`tab text-[1.02rem] ${selectedTab == category.id ? 'tab-active' : ""}`}
          onClick={handleSelectedTab}
        >
          {category.name}
        </a>
      ))}
    </div>
  );
}

export default CategoryTabs;
