"use client"; 
import React, { useState } from 'react';
import Image from 'next/image';



const QoutesImageSlider = ({ images }) => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
                <div class="mb-4">
								<label for="">Presupuesto</label>
								<div class="banner-slider-wrapp mt-3">
									<div class="owl-carousel owl-theme service-slider">
                    <div className="flex items-center justify-center h-screen">
                      <button className="px-4 py-2 bg-gray-500 rounded-l" onClick={previousImage} >
                        Previous
                      </button>
                        <div class="item">
                          <div class="service-box">
                            <img className="max-w-full h-auto" src={images[currentImageIndex]}
                                alt={`Image ${currentImageIndex + 1}`}  />
                            <p>Propiedades</p>
                          </div>
                        </div>
                        
                      <button className="px-4 py-2 bg-gray-500 rounded-r" onClick={nextImage} >
                        Next
                      </button>
                    </div>
									</div>
								</div>
							</div>
     
  );
};

export default QoutesImageSlider;
