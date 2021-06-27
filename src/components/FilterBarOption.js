import React from "react";

const FilterBarOption = ({ title }) => {
  return (
    <div className="bg-gray-50 px-6 py-3 border-solid border-2 border-gray-100 rounded-full text-gray-500 text-xl hover:bg-gray-200">
      {title}
    </div>
  );
};

export default FilterBarOption;
