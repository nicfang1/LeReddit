import React from "react";

const Post = ({ image }) => {
  return (
    <div className="w-full bg-white my-3 flex-col items-center justify-center">
      <img src={image.webformatURL} alt="hello" className="p-5" />
      <div className="flex">
        <p>Comment</p>
        <p>Share</p>
        <p>Save</p>
      </div>
    </div>
  );
};

export default Post;
