"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image'

const togglemenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="togglesubpages" ref={ref}>
        <div class="img-icon icon-bg " onClick={toggleMenu}>  
         <i className="fa-solid fa-ellipsis"></i>  
        </div>
        
      {isOpen && (
       <div class="popup-wrapp">
            <div class="menu-link pb-6">
                <a href="#"><span className='flex md:inline-flex'><Image height='50' width='50' src="/images/target.png" alt="" /></span> Borrar</a>
                <a href="#"><span className='flex md:inline-flex'><Image height='50' width='50' src="/images/target.png" alt="" /></span> Borrar</a>
                <a href="#"><span className='flex md:inline-flex'><Image height='50' width='50' src="/images/target.png" alt="" /></span> Borrar</a>
                <a href="#"><span className='flex md:inline-flex'><Image height='50' width='50' src="/images/target.png" alt="" /></span> Borrar</a>
                <hr />
                <a href="#"><span className='flex md:inline-flex'><Image height='50' width='50' src="/images/target.png" alt="" /></span> Borrar</a>
                <a href="#"><span className='flex md:inline-flex'><Image height='50' width='50' src="/images/target.png" alt="" /></span> Borrar</a>
                <a href="#"><span className='flex md:inline-flex'><Image height='50' width='50' src="/images/target.png" alt="" /></span> Borrar</a>
            </div>
            <div class="img-icon icon-bg lowerdots" onClick={toggleMenu}>  
                <i className="fa-solid fa-ellipsis"></i>  
            </div>
        </div>
      )}
    </div>
  );
};

export default togglemenu;
