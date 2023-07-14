"use client"; 

import React, { useState, useEffect } from 'react';

var $ = require('jquery');
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery');
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});
import Image from 'next/image';

const QoutesImageSlider = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (index) => {
    const itemIndex = selectedItems.indexOf(index);
    if (itemIndex > -1) {
      const updatedItems = [...selectedItems];
      updatedItems.splice(itemIndex, 1);
      setSelectedItems(updatedItems);
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

const Responsive = {
  0: {
    items:7,
    margin:5
  },
  786: {
    items:7,
    margin:10
  },
  1024: {
    items:7,
    margin:20
  }
};


const image_text = [
  {
    url: '/images/propiedades.png',
    paragraph: 'propiedades',
  },
  {
    url: '/images/barcos.png',
    paragraph: 'Barcos',
  },
  {
    url: '/images/salones.png',
    paragraph: 'Salones de Fiesta',
  },
  {
    url: '/images/terrazas.png',
    paragraph: 'Terrazas',
  },
  {
    url: '/images/tickets.png',
    paragraph: 'Boletos',
  },
  {
    url: '/images/jardines.png',
    paragraph: 'Jardines',
  },
  {
    url: '/images/hotels.png',
    paragraph: 'Hoteles',
  },
  {
    url: '/images/tickets.png',
    paragraph: 'Boletos',
  },
];

const list = image_text.map((item, index) => (
  <div className={`item ${selectedItems.includes(index) ? 'selected' : ''}`} key={index} onClick={() => handleItemClick(index)}>
    <div className="service-box">
      <Image width={331} height={246} src={item.url} alt="" />
      <p>{item.paragraph}</p>
    </div>
  </div>
));

console.log(selectedItems);
const selectedItemsList = selectedItems.map((index) => (
  <div className="relative flex-grow max-w-[108px] flex-1 pl-[12px]" key={index}>
    <div className="service-box service-box2">
      <Image width={331} height={246} src={image_text[index].url} alt="" />
      <p>{image_text[index].paragraph}</p>
    </div>
  </div>
));

  const navText = [
    '<div className="text-[#ff5a5e] qoutesvg"><svg className="h-4 text-[#ff5a5e] dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/></svg>',
    '<span><svg className="h-4 text-[#ff5a5e] dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/></svg></span></div>'
  ];

  return (
    <>
    <div className="mb-10 mt-10 sliderdiv">
      
      <OwlCarousel
        responsive={Responsive}
        className="owl-theme"
        autoplay={false}
        loop
        margin={10}
        nav={true}
        dots={false}
        navText={navText}
      > 
        {list}
      </OwlCarousel>
    </div>
    <div className="mb-4">
      <label>Creemos que estos también te podrían interesar</label>
      <div className="flex flex-wrap mt-3 custom-col20">{selectedItemsList}</div>
    </div>
    </>
  );
};

export default QoutesImageSlider;