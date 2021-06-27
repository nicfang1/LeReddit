import React, { useState } from "react";

export const ImageContext = React.createContext({
  images: [],
  getImages: () => {},
});

const ImageContextProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  const getImages = async (queryTerm = "") => {
    const response = await fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${queryTerm}&image_type=photo&pretty=true`
    );
    const data = await response.json();
    setImages(data.hits);
  };

  return (
    <ImageContext.Provider value={{ images: images, getImages: getImages }}>
      {children}
    </ImageContext.Provider>
  );
};

export default ImageContextProvider;
