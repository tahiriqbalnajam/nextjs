"use client"; 
import React, { useState } from 'react';
import Image from 'next/image';

const images = [
  '/images/propiedades.png',
  '/images/barcos.png',
  '/images/salones.png',
];

const QoutesImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="mb-4">
      <label htmlFor="">Presupuesto</label>
      <div className="banner-slider-wrapp mt-3">
        <div className="owl-carousel owl-theme service-slider">
          <div className="flex items-center justify-center h-screen">
            <i className="px-4 py-2 bg-gray-500 rounded-l" onClick={previousImage}></i>
            <div className="item">
              <div className="service-box">
                <Image
                  className="max-w-full h-auto"
                  src={images[currentImageIndex]}
                  alt={`Image ${currentImageIndex + 1}`}
                  width={50}
                  height={50}
                />
                <p>Propiedades</p>
              </div>
            </div>
            {images.length > 2 && (
              <div className="item">
                <div className="service-box">
                  <Image
                    className="max-w-full h-auto"
                    src={images[(currentImageIndex + 1) % images.length]}
                    alt={`Image ${currentImageIndex + 2}`}
                    width={50}
                    height={50}
                  />
                  <p>Barcos</p>
                </div>
              </div>
            )}
            <i className="px-4 py-2 bg-gray-500 rounded-r" onClick={nextImage}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QoutesImageSlider;
