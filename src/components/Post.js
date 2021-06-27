import React from "react";

const Post = ({ image }) => {
  return (
    <div className="relative border-solid border-2 border-gray-400 rounded-md border-opacity-0 hover:border-opacity-100 w-full bg-white mt-3 flex-col items-center justify-center pt-3 px-3">
      <button className="absolute right-2 top-2 bg-blue-500 text-white px-4 py-1 rounded-full text-xl hover:bg-blue-400">
        + Join
      </button>
      <img src={image.webformatURL} alt="hello" />
      <div className="flex w-2/6 p-2">
        <p className="hover:bg-gray-200 p-2 cursor-pointer">
          {image.comments} Comment
        </p>
        <p className="hover:bg-gray-200 p-2 cursor-pointer">Share</p>
        <p className="hover:bg-gray-200 p-2 cursor-pointer">Save</p>
        <p className="hover:bg-gray-200 p-2 cursor-pointer">...</p>
      </div>
    </div>
  );
};

export default Post;
