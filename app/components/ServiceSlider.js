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
      items:4,
      margin:5
    },
    786: {
      items:4,
      margin:10
    },
    1024: {
      items:4,
      margin:20
    }
};


const image_text = [
    {
      url: '/images/services1.jpg',
      heading: 'Propiedades',
      paragraph: '75 Listados',
    },
    {
      url: '/images/services2.jpg',
      heading: 'Barcos',
      paragraph: '56 Listados',
    },
{
      url: '/images/services3.jpg',
      heading: 'Jardines',
      paragraph: '22 Listados',
    },
{
      url: '/images/services4.jpg',
      heading: 'Salones de Fiestas',
      paragraph: '33 Listados',
    },
{
      url: '/images/services1.jpg',
      heading: 'Propiedades',
      paragraph: '75 Listados',
    },
{
      url: '/images/services2.jpg',
      heading: 'Barcos',
      paragraph: '56 Listados',
    },
{
      url: '/images/services3.jpg',
      heading: 'Jardines',
      paragraph: '22 Listados',
    },
{
      url: '/images/services4.jpg',
      heading: 'Salones de Fiestas',
      paragraph: '33 Listados',
    },
  ];

const list = []

  
for (const [i, item] of image_text.entries()) {
	list.push(
	  <div className="item">
		<div className="features-box">
		  <Image width={331} height={246} src={item.url} alt="" />
		  <h4>{item.heading}</h4>
		  <p>{item.paragraph}</p>
		</div>
	  </div>
	);
  }

const ServiceSlider = () => {
  return (
    <div className="mt-10 serviceslider">
		
      <OwlCarousel responsive={Responsive} className='owl-theme features-slider' autoplay={false} loop margin={10} nav={true} dots={false} navText={['<div className="slidersarrows"><i class="slidersarrows-left fa-solid fa-chevron-left text-[#ff5a5e]"></i>','<i class="slidersarrowsright fa-solid fa-chevron-right text-[#ff5a5e] pl-3"></i> </div>']}> 
	  {list}
      </OwlCarousel>
    </div>
  );
};

export default ServiceSlider;
