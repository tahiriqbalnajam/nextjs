"use client";
import { useState } from 'react';
const settingtogglemenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
        <div className="relative ml-3">
                    <div>
                    <button onClick={toggleMenu} className="flex items-center max-w-xs text-base text-white rounded-full focus:outline-none focus:shadow-solid"
                        id="user-menu" aria-label="User menu" >
                        <img className="w-14 h-14 rounded-full border-red-200" src="/images/profile-img.png" alt="" />
                        <p className="ml-2 uppercase">BERNARDO GONZALEZ</p>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={toggleMenu} className="w-6 h-4 transform rotate-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
                      </button>
    </div>

          {isOpen && (
            <div className="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg">
            <div className="py-1 bg-white rounded-md shadow-xs">
            <ul className="py-1 bg-white rounded-md shadow-xs">
              <li>
              <a href="#" className="flex flex-row items-center px-4 py-2 text-base text-gray-700 focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-gray-100 focus:bg-gray-100">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                          <span className="ml-2">Your Profile</span>
                        </a>
              </li>
              <li>
              <a href="#" className="flex flex-row items-center px-4 py-2 text-base text-gray-700 focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-gray-100 focus:bg-gray-100">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                            </path>
                          </svg>
                          <span className="ml-2">Settings</span>
                        </a>
              </li>
              <li>
              <a href="#" className="flex flex-row items-center px-4 py-2 text-base text-red-500 hover:text-red-700 hover:bg-red-100 focus:outline-none focus:text-red-700 focus:bg-red-100">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                            <polyline points="16 17 21 12 16 7"></polyline>
                            <line x1="21" y1="12" x2="9" y2="12"></line>
                          </svg>
                          <span className="ml-2">Sign out</span>
                        </a>
              </li>
            </ul>
            </div>
            </div>
          )}
        </div>
  );
};

export default settingtogglemenu;
