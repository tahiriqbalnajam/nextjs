"use client"; 
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/propiedades.png',
  '/images/barcos.png',
  '/images/salones.png',
  '/images/terrazas.png',
  "/images/tickets.png",
  "/images/jardines.png",
  "/images/hotels.png",
  "/images/tickets.png",
];

const QoutesImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // Set the desired interval time (e.g., 3000ms = 3 seconds)

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, []);

  return (
    <div className="mb-10 mt-10">
      <div className='myclass'>
        <label className='text-left absolute' for="">Presupuesto</label>
        <div className='text-right'>
          <i className="fa-solid fa-chevron-left text-red-600" onClick={previousImage}></i>
          <i class="fa-solid fa-chevron-right text-red-600 pl-3" onClick={nextImage}></i>
        </div>
      </div>
      <div className="banner-slider-wrapp mt-3">
        <div className="owl-carousel owl-theme service-slider">
          <div className="flex items-center justify-center">
            <div className="relative flex-grow max-w-[16%] flex-1 pr-4">
              <div className="service-box px-5 py-5">
                <Image
                  className="max-w-full h-auto"
                  src={images[currentImageIndex]}
                  alt={`Image ${currentImageIndex + 1}`}
                  width={110}
                  height={110}
                />
                <p className='text-[14px]'>Propiedades</p>
              </div>
            </div>
            {images.length > 2 && (
              <div className="relative flex-grow max-w-[16%] flex-1 pr-4">
                <div className="service-box px-5 py-5">
                  <Image
                    className="max-w-full h-auto"
                    src={images[(currentImageIndex + 1) % images.length]}
                    alt={`Image ${currentImageIndex + 2}`}
                    width={110}
                    height={110}
                  />
                  <p className='text-[14px]'>Barcos</p>
                </div>
              </div>
            )}
            {images.length > 3 && (
              <div className="relative flex-grow max-w-[16%] flex-1 pr-4">
                <div className="service-box px-5 py-5">
                  <Image
                    className="max-w-full h-auto"
                    src={images[(currentImageIndex + 2) % images.length]}
                    alt={`Image ${currentImageIndex + 3}`}
                    width={110}
                    height={110}
                  />
                  <p className='text-[14px]'>Barcos</p>
                </div>
              </div>
            )}
            {images.length > 4 && (
              <div className="relative flex-grow max-w-[16%] flex-1 pr-4">
                <div className="service-box px-5 py-5">
                  <Image
                    className="max-w-full h-auto"
                    src={images[(currentImageIndex + 3) % images.length]}
                    alt={`Image ${currentImageIndex + 4}`}
                    width={110}
                    height={110}
                  />
                  <p className='text-[14px]'>Barcos</p>
                </div>
              </div>
            )}
            {images.length > 5 && (
              <div className="relative flex-grow max-w-[16%] flex-1 pr-4">
                <div className="service-box px-5 py-5">
                  <Image
                    className="max-w-full h-auto"
                    src={images[(currentImageIndex + 4) % images.length]}
                    alt={`Image ${currentImageIndex + 5}`}
                    width={110}
                    height={110}
                  />
                  <p className='text-[14px]'>Barcos</p>
                </div>
              </div>
            )}
            {images.length > 6 && (
              <div className="relative flex-grow max-w-[16%] flex-1 pr-4">
                <div className="service-box px-5 py-5">
                  <Image
                    className="max-w-full h-auto"
                    src={images[(currentImageIndex + 5) % images.length]}
                    alt={`Image ${currentImageIndex + 6}`}
                    width={110}
                    height={110}
                  />
                  <p className='text-[14px]'>Barcos</p>
                </div>
              </div>
            )}
            {images.length > 7 && (
              <div className="relative flex-grow max-w-[16%] flex-1 pr-4">
                <div className="service-box px-5 py-5">
                  <Image
                    className="max-w-full h-auto"
                    src={images[(currentImageIndex + 6) % images.length]}
                    alt={`Image ${currentImageIndex + 7}`}
                    width={110}
                    height={110}
                  />
                  <p className='text-[14px]'>Barcos</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QoutesImageSlider;
