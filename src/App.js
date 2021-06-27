import React, { useContext, useEffect } from "react";
import FilterBar from "./components/FilterBar";
import Navbar from "./components/Navbar";
import { ImageContext } from "./store/image-context";
import Post from "./components/Post";

function App() {
  const imageCtx = useContext(ImageContext);
  const images = imageCtx.images;

  useEffect(() => {
    imageCtx.getImages("");
  }, [imageCtx]);

  return (
    <div className="bg-gray-300">
      <Navbar />
      <div className="px-48">
        <FilterBar />
        {images.map((image) => (
          <Post image={image} />
        ))}
      </div>
    </div>
  );
}

export default App;
