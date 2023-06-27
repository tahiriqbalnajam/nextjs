"use client";
import { useState, useEffect, useRef } from 'react';

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
    <div className="relative" ref={ref}>
      <button onClick={toggleMenu} className="flex flex-row items-center px-3 py-2 ml-4 text-base font-medium text-white bold rounded-md hover:text-colorRed focus:outline-none">
        <span className="mx-2">EXPLORA</span>
        <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" className="w-6 h-5 mt-1 transform rotate-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      {isOpen && (
        <ul className="py-1 bg-white rounded-md shadow-xs absolute -left-0">
          <li>
            <a href="#" className="flex flex-row items-center px-4 py-2 text-base text-gray-700 focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-gray-100 focus:bg-gray-100">
              Acton
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-row items-center px-4 py-2 text-base text-gray-700 focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-gray-100 focus:bg-gray-100">
              Another Action
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-row items-center px-4 py-2 text-base text-gray-700 focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-gray-100 focus:bg-gray-100">
              Something else there
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default togglemenu;
