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
      items:2,
      margin:5
    },
    786: {
      items:2,
      margin:10
    },
    1024: {
      items:2,
      margin:20
    }
};

const image_text = [
    {
      url: '/images/testimonial1.png',
      heading: 'Propiedades',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      url: '/images/testimonial1.png',
      heading: 'Bernardo González',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
{
      url: '/images/testimonial1.png',
      heading: 'Bernardo González',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    }
  ];

  const list = []

  
for (const [i, item] of image_text.entries()) {
	list.push(
	  <div className="item">
		<div className="tesimonial-card">
			<div className="card-inner">
			<Image width={331} height={246} src={item.url} alt="" className="testimonial-thumb" />
				<span className="testimonial-quote mb-8">
					<Image width={50} height={50} src='/images/newqoute.png' alt=""/>
				</span>
			<h4>{item.heading}</h4>
			<p>{item.paragraph}</p>
			</div>
		</div>
	  </div>
	);
  }

const ElservicioServiceslider = () => {
  const navText = [
    '<div className="text-[#ff5a5e] qoutesvg"><svg className="h-4 text-[#ff5a5e] dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/></svg>',
    '<span><svg className="h-4 text-[#ff5a5e] dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/></svg></span></div>'
  ];
  return (
    <div className="mt-10 whattheysaymain">
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

export default ElservicioServiceslider;
