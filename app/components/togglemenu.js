"use client";
import { useState } from 'react';
const togglemenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
       <button onClick={toggleMenu} className="flex flex-row items-center px-3 py-2 ml-4 text-base font-medium text-white bold rounded-md hover:text-colorRed focus:outline-none">
        <span className="mx-2">Users</span>
        <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-1 transform rotate-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<polyline points="6 9 12 15 18 9"></polyline>
										</svg>
        </button>
      {isOpen && (
        <ul className="py-1 bg-white rounded-md shadow-xs absolute -left-0">
          <li>
          <a href="#" className="flex flex-row items-center px-4 py-2 text-base text-gray-700 focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-gray-100 focus:bg-gray-100">
												Users-1
											</a>
          </li>
          <li>
          <a href="#" className="flex flex-row items-center px-4 py-2 text-base text-gray-700 focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-gray-100 focus:bg-gray-100">
												Users-2
											</a>
          </li>
          <li>
          <a href="#" className="flex flex-row items-center px-4 py-2 text-base text-gray-700 focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-gray-100 focus:bg-gray-100">
												Users-3
											</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default togglemenu;
