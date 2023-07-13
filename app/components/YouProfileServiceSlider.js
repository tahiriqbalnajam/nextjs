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
      url: '/images/img1.jpg'
    },
    {
      url: '/images/img2.jpg'
    },
{
      url: '/images/img3.jpg'
    },
{
      url: '/images/img4.jpg'
    },
{
      url: '/images/img2.jpg'
    },
  ];

const list = []

  
for (const [i, item] of image_text.entries()) {
	list.push(
	  <div className="item">
		<div className="img-holder">
		  <Image width={313} height={239} src={item.url} alt="" />
		</div>
	  </div>
	);
  }
  const navText = [
    '<div className="text-[#ff5a5e] qoutesvg"><svg className="h-4 text-[#ff5a5e] dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/></svg>',
    '<span><svg className="h-4 text-[#ff5a5e] dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/></svg></span></div>'
  ];
const imglider = () => {
  return (
    <div className="mt-10 allmainsliders">
		
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

export default imglider;
