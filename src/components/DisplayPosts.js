import React, { useContext } from "react";
import { ImageContext } from "../store/image-context";
import Post from "./Post";

const DisplayPosts = () => {
  const imageCtx = useContext(ImageContext);
  const images = imageCtx.images;
  return (
    <div>
      {images.map((image) => (
        <Post image={image} />
      ))}
    </div>
  );
};

export default DisplayPosts;
