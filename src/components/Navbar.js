import React, { useState, useContext } from "react";
import { MdSearch } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { HiChevronDown } from "react-icons/hi";
import NavDropdown from "./NavDropdown";
import { ImageContext } from "../store/image-context";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const imageCtx = useContext(ImageContext);
  const [search, setSearch] = useState("");

  return (
    <div className="flex justify-around p-5 bg-white">
      <div>
        <img
          className="h-10 w-100"
          src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo.png"
          alt="Reddit Logo"
        />
      </div>
      <div className="flex w-2/5 items-center border-solid border-2 border-blue-300 border-opacity-0 hover:border-opacity-100 bg-gray-100 rounded-md p-2">
        <MdSearch className="text-xl text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="border-none focus:outline-none ml-2 bg-transparent w-full"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              imageCtx.getImages(search);
            }
          }}
        />
      </div>

      <div className="flex items-center justify-evenly relative">
        <button className="border-solid border-2 rounded-full py-2 px-6 mr-2 text-blue-500 border-blue-500 text-lg">
          Log in
        </button>
        <button className="border-solid border-2 rounded-full py-2 px-6 mr-2 text-white bg-blue-500 text-lg hover:bg-blue-400">
          Sign Up
        </button>
        <div
          className="flex border-solid border-2 border-gray-200 rounded-md border-opacity-0 hover:border-opacity-100 py-3 px-6"
          onClick={() => setShowNav((prevState) => !prevState)}
        >
          <AiOutlineUser className="text-xl" />
          <HiChevronDown className="text-xl" />
        </div>
        {showNav && <NavDropdown />}
      </div>
    </div>
  );
};

export default Navbar;
