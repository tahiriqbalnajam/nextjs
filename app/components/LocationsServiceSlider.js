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


const LocationsservicioServiceslider = () => {
  return (
    <div className="mt-10 serviceslider">
      <OwlCarousel responsive={Responsive} className='owl-theme features-slider' autoplay={false} loop margin={10} nav={true} dots={false} navText={['<div className="slidersarrows"><i class="slidersarrows-left fa-solid fa-chevron-left text-red-600"></i>','<i class="slidersarrowsright fa-solid fa-chevron-right text-red-600 pl-3"></i> </div>']}> 
	  <div class="item">
								<div class="features-box">
									<div class="img-box">
										<Image height='264' width='362' src="/images/location1.jpg" alt="" />
										<a href="#" class="img-tag">Destacado</a>
									</div>
									<h4>Bares</h4>
									<p>26 Listados</p>
								</div>
							</div>
							<div class="item">
								<div class="features-box">
									<div class="img-box"><Image height='264' width='362' src="/images/location2.jpg" alt="" /></div>
									<h4>Terrazas</h4>
									<p>22 Listados</p>
								</div>
							</div>
							<div class="item">
								<div class="features-box">
									<div class="img-box"><Image height='264' width='362' src="/images/location3.jpg" alt="" /> <a href="#" class="img-tag">Más visto</a></div>
									<h4>Restaurantes</h4>
									<p>9 Listados</p>
								</div>
							</div>
							<div class="item">
								<div class="features-box">
									<div class="img-box"><Image height='264' width='362' src="/images/location4.jpg" alt="" /></div>
									<h4>Transporte</h4>
									<p>33 Listados</p>
								</div>
							</div><div class="item">
								<div class="features-box">
									<div class="img-box"><Image height='264' width='362' src="/images/location1.jpg" alt="" /></div>
									<h4>Terrazas</h4>
									<p>22 Listados</p>
								</div>
							</div>
							<div class="item">
								<div class="features-box">
									<div class="img-box"><Image height='264' width='362' src="/images/location2.jpg" alt="" /></div>
									<h4>Barcos</h4>
									<p>Transporte</p>
								</div>
							</div>
      </OwlCarousel>
    </div>
  );
};

export default LocationsservicioServiceslider;
