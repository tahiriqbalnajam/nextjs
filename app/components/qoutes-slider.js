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
const images = [
  '/images/propiedades.png',
  '/images/barcos.png',
  '/images/salones.png',
  '/images/terrazas.png',
  "/images/tickets.png",
  "/images/jardines.png",
  "/images/hotels.png",
  "/images/tickets.png",
];

const QoutesImageSlider = () => {
  return (
    <div className="mb-10 mt-10">
      <OwlCarousel responsive={Responsive} className='owl-theme' autoplay={false} loop margin={10} nav={true} dots={false} navText={['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>']}> 
        <div class="item">
          <div class="service-box">
            <Image src="/images/propiedades.png" alt=""  height="50" width="50" />
            <p>Propiedades</p>
          </div>
        </div>
        <div class="item">
          <div class="service-box">
            <Image src="/images/barcos.png" alt=""  height="50" width="50" />
            <p>Barcos</p>
          </div>
        </div>
        <div class="item">
          <div class="service-box">
            <Image src="/images/salones.png" alt=""  height="50" width="50" />
            <p>Salones de Fiesta</p>
          </div>
        </div>
        <div class="item">
          <div class="service-box">
            <Image src="/images/terrazas.png" alt=""  height="50" width="50" />
            <p>Terrazas</p>
          </div>
        </div>
        <div class="item">
          <div class="service-box">
            <Image src="/images/tickets.png" alt=""  height="50" width="50" />
            <p>Boletos</p>
          </div>
        </div>
        <div class="item">
          <div class="service-box">
            <Image src="/images/jardines.png" alt=""  height="50" width="50" />
            <p>Jardines</p>
          </div>
        </div>
        <div class="item">
          <div class="service-box">
            <Image src="/images/hotels.png" alt=""  height="50" width="50" />
            <p>Hoteles</p>
          </div>
        </div>
        <div class="item">
          <div class="service-box">
            <Image src="/images/tickets.png" alt=""  height="50" width="50" />
            <p>Boletos</p>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default QoutesImageSlider;
