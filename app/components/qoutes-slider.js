"use client"; 
import React, { useState } from 'react';

const QoutesImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="absolute left-0 px-4 py-2 bg-gray-500 rounded-l"
        onClick={previousImage}
      >
        Previous
      </button>
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="max-w-full h-auto"
      />
      <button
        className="absolute right-0 px-4 py-2 bg-gray-500 rounded-r"
        onClick={nextImage}
      >
        Next
      </button>
    </div>
  );
};

export default QoutesImageSlider;
