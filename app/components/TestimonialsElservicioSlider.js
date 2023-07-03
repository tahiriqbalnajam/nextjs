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


const ElservicioServiceslider = () => {
  return (
    <div className="mt-10 whattheysaymain">
      <OwlCarousel responsive={Responsive} className='owl-theme features-slider' autoplay={false} loop margin={10} nav={true} dots={false} navText={['<div className="slidersarrows"><i class=" fa-solid fa-chevron-left text-red-600"></i>','<i class="fa-solid fa-chevron-right text-red-600 pl-3"></i> </div>']}> 
		<div class="item">
			<div class="tesimonial-card">
				<div class="card-inner">
					<Image height='50' width='50' class="testimonial-thumb" alt="" src="/images/testimonial1.png" />
					<span class="testimonial-quote">
						<i class="fa-solid fa-quote-right"></i>
					</span>
					<h4>Bernardo González</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						Ut enim ad minim veniam
					</p>
				</div>
			</div>
		</div>
		<div class="item">
			<div class="tesimonial-card">
				<div class="card-inner">
					<Image height='50' width='50' class="testimonial-thumb" alt="" src="/images/testimonial1.png" />
					<span class="testimonial-quote">
						<i class="fa-solid fa-quote-right"></i>
					</span>
					<h4>Bernardo González</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						Ut enim ad minim veniam
					</p>
				</div>
			</div>
		</div>
		<div class="item">
			<div class="tesimonial-card">
				<div class="card-inner">
					<Image height='50' width='50' class="testimonial-thumb" alt="" src="/images/testimonial1.png" />
					<span class="testimonial-quote">
						<i class="fa-solid fa-quote-right"></i>
					</span>
					<h4>Bernardo González</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						Ut enim ad minim veniam
					</p>
				</div>
			</div>
		</div>
      </OwlCarousel>
    </div>
  );
};

export default ElservicioServiceslider;
