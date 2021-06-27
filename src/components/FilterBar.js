import React from "react";
import FilterBarOption from "./FilterBarOption";

const filterOptions = ["Hot", "Singapore", "New", "Top", "..."];

const FilterBar = () => {
  return (
    <div className="mt-5">
      <p className="text-xl font-medium">Popular posts</p>
      <div className="flex border-solid border-2 border-gray-100 rounded-md mt-2 bg-white p-5">
        {filterOptions.map((option) => (
          <FilterBarOption title={option} />
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
