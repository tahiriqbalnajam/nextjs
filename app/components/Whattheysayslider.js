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
      <div className="default-heading">   
          <h2><span>{heading}</span>{heading2}</h2>
          <div className="owl-buttons">
              <button className="prev-btn"><i className="fa-solid fa-angle-left" onClick={previousImage}></i></button>
              <button className="next-btn"><i className="fa-solid fa-angle-right" onClick={nextImage}></i></button>
          </div>
      </div>
      <div className="owl-testimonial owl-carousels flex items-center">
        <div className="item mr-4">
            <div className="tesimonial-card">
              <div className="card-inner">
                <Image
                  className="testimonial-thumb"
                  src={images[currentImageIndex].url}
                  alt={`Image ${currentImageIndex + 1}`}
                  width={280}
                  height={390}
                />
              <span className="testimonial-quote">
              <Image width='50' height='50' src='/images/quote-right.png' />
              </span>
              <h4>{images[currentImageIndex].heading}</h4>
              <p>{images[currentImageIndex].paragraph}</p>
            </div>
            </div>
        </div>
        
        {images.length > 1 && (
          <div className="item ml-4">
          <div className="tesimonial-card">
            <div className="card-inner">
            <Image
              className="testimonial-thumb"
              src={images[(currentImageIndex + 1) % images.length].url}
              alt={`Image ${currentImageIndex + 2}`}
              width={290}
              height={390}
            />
            <span className="testimonial-quote">
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
