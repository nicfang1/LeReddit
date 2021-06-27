import React from "react";
import DropdownItem from "./DropdownItem";

const dropdownOptions = [
  "Reddit Coins",
  "Reddit Premium",
  "Explore",
  "Popular Posts",
];

const NavDropdown = () => {
  return (
    <div className="bg-white border-solid rounded-sm border-2 border-gray-200 absolute -bottom-44 left-0 w-full">
      {dropdownOptions.map((option) => (
        <DropdownItem title={option} />
      ))}
    </div>
  );
};

export default NavDropdown;
