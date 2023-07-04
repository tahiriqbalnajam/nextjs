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
		<div class="tesimonial-card">
			<div class="card-inner">
			<Image width={331} height={246} src={item.url} alt="" class="testimonial-thumb" />
				<span class="testimonial-quote mb-8">
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
  return (
    <div className="mt-10 whattheysaymain">
      <OwlCarousel responsive={Responsive} className='owl-theme features-slider' autoplay={false} loop margin={10} nav={true} dots={false} navText={['<div className="slidersarrows"><i class=" fa-solid fa-chevron-left text-[#ff5a5e]"></i>','<i class="fa-solid fa-chevron-right text-[#ff5a5e] pl-3"></i> </div>']}> 
		{list}
      </OwlCarousel>
    </div>
  );
};

export default ElservicioServiceslider;
