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

const list = [];

for (const [i, item] of image_text.entries()) {
  list.push(
    <div className="item" key={i}>
      <div className="service-box">
        <Image width={331} height={246} src={item.url} alt="" />
        <p>{item.paragraph}</p>
      </div>
    </div>
  );
}

const QoutesImageSlider = () => {
  const navText = [
    '<div className="text-[#ff5a5e] qoutesvg"><svg className="h-4 text-[#ff5a5e] dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/></svg>',
    '<span><svg className="h-4 text-[#ff5a5e] dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/></svg></span></div>'
  ];

  return (
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
  );
};

export default QoutesImageSlider;
