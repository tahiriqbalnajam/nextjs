"use client"; 
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Whattheysay_slider = ({images, heading, heading2 }) => {
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
    <div>
    <div class="default-heading">
                   
                    <h2><span>{heading}</span>{heading2}</h2>
                    <div class="owl-buttons">
                        <button class="prev-btn"><i class="fa-solid fa-angle-left" onClick={previousImage}></i></button>
                        <button class="next-btn"><i class="fa-solid fa-angle-right" onClick={nextImage}></i></button>
                    </div>
                </div>
    <div class="owl-testimonial owl-carousel flex items-center">

      <div class="item mr-4">
          <div class="tesimonial-card">
            <div class="card-inner">
              <Image
                className="testimonial-thumb"
                src={images[currentImageIndex].url}
                alt={`Image ${currentImageIndex + 1}`}
                width={280}
                height={390}
              />
            <span class="testimonial-quote">
            <Image width='50' height='50' src='/images/quote-right.png' />
            </span>
            <h4>{images[currentImageIndex].heading}</h4>
            <p>{images[currentImageIndex].paragraph}</p>
          </div>
          </div>
      </div>
      
      {images.length > 1 && (
        <div class="item ml-4">
        <div class="tesimonial-card">
          <div class="card-inner">
          <Image
            className="testimonial-thumb"
            src={images[(currentImageIndex + 1) % images.length].url}
            alt={`Image ${currentImageIndex + 2}`}
            width={290}
            height={390}
          />
          <span class="testimonial-quote">
              <Image width='50' height='50' src='/images/quote-right.png' />
            </span>
            <h4>{images[(currentImageIndex + 1) % images.length].heading}</h4>
            <p>{images[(currentImageIndex + 1) % images.length].paragraph}</p>
          </div>
          </div>
      </div>
      )}
    </div>
    </div>
  );
};

export default Whattheysay_slider;
