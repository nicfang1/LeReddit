import React from "react";

const RedditPremium = () => {
  return (
    <div className="bg-white mt-5 border-transparent rounded-md p-3">
      <p className="font-bold">Reddit Premium</p>
      <p>The best Reddit experience, with monthly Coins</p>
      <div className="flex items-center justify-center">
        <button className="bg-red-500 text-white font-bold w-5/6 p-2 mt-2 rounded-full hover:bg-red-400">
          Try Now
        </button>
      </div>
    </div>
  );
};

export default RedditPremium;
