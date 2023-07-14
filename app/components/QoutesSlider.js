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
    id: '1',
    url: '/images/propiedades.png',
    paragraph: 'propiedades',
  },
  {
    id: '2',
    url: '/images/barcos.png',
    paragraph: 'Barcos',
  },
  {
    id: '3',
    url: '/images/salones.png',
    paragraph: 'Salones de Fiesta',
  },
  {
    id: '4',
    url: '/images/terrazas.png',
    paragraph: 'Terrazas',
  },
  {
    id: '5',
    url: '/images/tickets.png',
    paragraph: 'Boletos',
  },
  {
    id: '6',
    url: '/images/jardines.png',
    paragraph: 'Jardines',
  },
  {
    id: '7',
    url: '/images/hotels.png',
    paragraph: 'Hoteles',
  },
  {
    id: '8',
    url: '/images/tickets.png',
    paragraph: 'Boletos',
  },
];


const navText = [
  '<div className="text-[#ff5a5e] qoutesvg"><svg className="h-4 text-[#ff5a5e] dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/></svg>',
  '<span><svg className="h-4 text-[#ff5a5e] dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/></svg></span></div>'
];

export default class QoutesImageSlider extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      selectedItems: [],
      selectedItemsList: []
    }
  }

  componentDidMount() {
  }
  
  handleItemClick(id) {
    let someExist = this.state.selectedItemsList.some(item => item.id == id);
  
    if(someExist) {
      console.log('item exists')
      return;
    }
    
    let selected = image_text.filter( item => item.id == id );
    console.log(this.state.selectedItemsList);
    this.setState((state, props) => ({
      selectedItemsList: [...state.selectedItemsList, selected[0]]
    }));
  };

  handleRemoveItem(id) {
    let ListItems = this.state.selectedItemsList.filter(item => item.id != id);
    this.setState((state, props) => ({
      selectedItemsList: ListItems
    }));

  }
  render() {
    const { checkpage } = this.props;
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
            {
              image_text.map((item, index) => (
                <div className='item' key={index} onClick={() => this.handleItemClick(item.id)}>
                  <div className="service-box">
                    <Image width={331} height={246} src={item.url} alt="" />
                    <p>{item.paragraph}</p>
                  </div>
                </div>
              ))
            }
            </OwlCarousel>
        </div>
        { this.state.selectedItemsList.length > 0 && checkpage=="addonclick" &&
          <div className="mb-4">
              <label>Creemos que estos también te podrían interesar</label>
              <div className="flex flex-wrap mt-3 custom-col20">
                {
                  this.state.selectedItemsList.map((item, index) => (
                    <div className="relative flex-grow max-w-[108px] flex-1 pl-[12px]" key={index} onClick={() => this.handleRemoveItem(item.id)}>
                      <div className="service-box service-box2">
                        <Image width={331} height={246} src={item.url} alt="" />
                        <p>{item.paragraph}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
          </div>
        }
        </>
    )
  };
}