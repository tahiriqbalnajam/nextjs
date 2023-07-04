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


const ElservicioServiceslider = () => {
  return (
    <div className="mt-10 serviceslider">
      <OwlCarousel responsive={Responsive} className='owl-theme features-slider' autoplay={false} loop margin={10} nav={true} dots={false} navText={['<div className="slidersarrows"><i class="slidersarrows-left fa-solid fa-chevron-left text-[#ff5a5e]"></i>','<i class="slidersarrowsright fa-solid fa-chevron-right text-[#ff5a5e] pl-3"></i> </div>']}> 
	  	<div class="item">
			<div class="features-box">
				<div class="img-box">
					<Image height='246' width='331' src="/images/services1-1.jpg" alt="" />
					<a href="#" class="img-tag">Destacado</a>
				</div>
				<h4>Propiedades</h4>
				<p>75 Listados</p>
			</div>
		</div>
		<div class="item">
			<div class="features-box">
				<div class="img-box"><Image height='246' width='331' src="/images/services2-2.jpg" alt="" /></div>
				<h4>Barcos</h4>
				<p>56 Listados</p>
			</div>
		</div>
		<div class="item">
			<div class="features-box">
				<div class="img-box"><Image height='246' width='331' src="/images/services3-3.jpg" alt="" /></div>
				<h4>Jardines</h4>
				<p>22 Listados</p>
			</div>
		</div>
		<div class="item">
			<div class="features-box">
				<div class="img-box"><Image height='246' width='331' src="/images/services4-4.jpg" alt="" /></div>
				<h4>Salones de Fiestas</h4>
				<p>33 Listados</p>
			</div>
		</div><div class="item">
			<div class="features-box">
				<div class="img-box"><Image height='246' width='331' src="/images/services1-1.jpg" alt="" /></div>
				<h4>Propiedades</h4>
				<p>75 Listados</p>
			</div>
		</div>
		<div class="item">
			<div class="features-box">
				<div class="img-box"><Image height='246' width='331' src="/images/services2-2.jpg" alt="" /></div>
				<h4>Barcos</h4>
				<p>56 Listados</p>
			</div>
		</div>
		<div class="item">
			<div class="features-box">
				<div class="img-box"><Image height='246' width='331' src="/images/services3-3.jpg" alt="" /></div>
				<h4>Jardines</h4>
				<p>22 Listados</p>
			</div>
		</div>
		<div class="item">
			<div class="features-box">
				<div class="img-box"><Image height='246' width='331' src="/images/services4-4.jpg" alt="" /></div>
				<h4>Salones de Fiestas</h4>
				<p>33 Listados</p>
			</div>
		</div>
      </OwlCarousel>
    </div>
  );
};

export default ElservicioServiceslider;
