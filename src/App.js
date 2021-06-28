import React, { useContext, useEffect } from "react";
import DisplayPosts from "./components/DisplayPosts";
import FilterBar from "./components/FilterBar";
import Navbar from "./components/Navbar";
import RedditPremium from "./components/RedditPremium";
import Terms from "./components/Terms";
import TopCommunity from "./components/TopCommunity";
import { ImageContext } from "./store/image-context";

function App() {
  const imageCtx = useContext(ImageContext);

  const getImages = imageCtx.getImages;

  useEffect(() => {
    getImages("");
  }, [getImages]);

  return (
    <div className="bg-gray-300">
      <Navbar />
      <div className="grid grid-cols-3 px-48 gap-6">
        <div className="col-span-2">
          <FilterBar />
          <DisplayPosts />
        </div>
        <div>
          <TopCommunity />
          <RedditPremium />
          <Terms />
        </div>
      </div>
    </div>
  );
}

export default App;
