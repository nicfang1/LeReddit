import React from "react";

const TopCommunity = () => {
  return (
    <div className="mt-14 border-transparent rounded-md bg-white overflow-hidden">
      <p className="bg-blue-400 text-white text-xl px-5 pt-10 pb-2 font-medium">
        Top New Communities
      </p>
      <ul>
        <li className="border-b-2 px-5 py-3 cursor-pointer">1 r/news</li>
        <li className="border-b-2 px-5 py-3 cursor-pointer">
          2 r/UpliftingNews
        </li>
        <li className="border-b-2 px-5 py-3 cursor-pointer">3 r/nottheonion</li>
        <li className="border-b-2 px-5 py-3 cursor-pointer">4 r/technews</li>
        <li className="border-b-2 px-5 py-3 cursor-pointer">
          5 r/savedyouaclick
        </li>
      </ul>
      <div className="flex items-center justify-center py-3">
        <button className="bg-blue-500 text-white w-3/4 p-2 rounded-full">
          View All
        </button>
      </div>
      <div className="flex items-center justify-evenly p-4">
        <p className="text-blue-500 font-bold bg-gray-100 hover:bg-gray-200 cursor-pointer p-2 border rounded-full border-transparent">
          Top
        </p>
        <p className="text-blue-500 font-bold bg-gray-100 hover:bg-gray-200 cursor-pointer p-2 border rounded-full border-transparent">
          Near You
        </p>
        <p className="text-blue-500 font-bold bg-gray-100 hover:bg-gray-200 cursor-pointer p-2 border rounded-full border-transparent">
          Sports
        </p>
        <p className="text-blue-500 font-bold bg-gray-100 hover:bg-gray-200 cursor-pointer p-2 border rounded-full border-transparent">
          Gaming
        </p>
      </div>
    </div>
  );
};

export default TopCommunity;
