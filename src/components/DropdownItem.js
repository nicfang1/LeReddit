import React from "react";

const DropdownItem = ({ title }) => {
  return (
    <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer text-gray-500">
      {/* <Icon /> */}
      {title}
    </div>
  );
};

export default DropdownItem;
