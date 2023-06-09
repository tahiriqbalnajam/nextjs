"use client"; 
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Serviceslider = ({images, locationimages_para}) => {
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
    <div className="mb-10 mt-10 flex">
      <div className='myclass '>
        <label className='text-left absolute' for="">Presupuesto</label>
        </div>
        <div>
          <i className="fa-solid relative top-[163px] right-[37px] text-[40px] fa-chevron-left text-red-600" onClick={previousImage}></i>    
        </div>
              <div className="w-full h-full pr-4">
                <Image
                  className="max-w-full h-auto"
                  src={images[currentImageIndex]}
                  alt={`Image ${currentImageIndex + 1}`}
                  width={280}
                  height={390}
                />
                <h4 className='text-[20px] mt-[20px] mb-[7px]'>{locationimages_para[currentImageIndex].heading}</h4>
                <p className='text-[14px] text-[#777777]'>75 Listados</p>
              </div>
      
            {images.length > 2 && (
             <div className="w-full h-full pl-4 pr-4">
                  <Image
                    className="max-w-full h-auto"
                    src={images[(currentImageIndex + 1) % images.length]}
                    alt={`Image ${currentImageIndex + 2}`}
                    width={290}
                    height={390}
                  />
                  <h4 className='text-[20px] mt-[20px] mb-[7px]'>Barcos</h4>
                <p className='text-[14px] text-[#777777]'>56 Listados</p>
                </div>
            )}

            {images.length > 3 && (
            <div className="w-full h-full pl-4 pr-4">
                  <Image
                    className="max-w-full h-auto"
                    src={images[(currentImageIndex + 2) % images.length]}
                    alt={`Image ${currentImageIndex + 3}`}
                    width={290}
                    height={390}
                  />
                  <h4 className='text-[20px] mt-[20px] mb-[7px]'>Jardines</h4>
                <p className='text-[14px] text-[#777777]'>22 Listados</p>
                </div>
            )}

            {images.length > 4 && (
              <div className="w-full h-full pl-4">
                <Image
                  className="max-w-full h-auto"
                  src={images[(currentImageIndex + 3) % images.length]}
                  alt={`Image ${currentImageIndex + 4}`}
                  width={290}
                  height={390}
                />
                <h4 className='text-[20px] mt-[20px] mb-[7px]'></h4>
                <p className='text-[14px] text-[#777777]'>56 Listados</p>
              </div>
            )} 
             <div>
          <i class="fa-solid relative top-[163px] left-[37px] fa-chevron-right text-[40px] text-red-600 pl-3" onClick={nextImage}></i>
        </div>
        </div>
  );
};

export default Serviceslider;
