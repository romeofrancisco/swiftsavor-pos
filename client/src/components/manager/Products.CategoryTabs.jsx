import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

function CategoryTabs() {
  const { categories } = useSelector((state) => state.categories);
  const [selectedTab, setSelectedTab] = useState('all');

  const handleSelectedTab = (e) => {
    setSelectedTab(e.target.name)
  };

  return (
    <div role="tablist" className="tabs tabs-bordered justify-center">
      <a
        role="tab"
        name="all"
        className={`tab text-[1.02rem] ${selectedTab === 'all' ? 'tab-active' : ""}`}
        onClick={handleSelectedTab}
      >
        All
      </a>
      {categories.map((category) => (
        <a
          key={category.id}
          name={category.name}
          role="tab"
          className={`tab text-[1.02rem] ${selectedTab === category.name ? 'tab-active' : ""}`}
          onClick={handleSelectedTab}
        >
          {category.name}
        </a>
      ))}
    </div>
  );
}

export default CategoryTabs;
