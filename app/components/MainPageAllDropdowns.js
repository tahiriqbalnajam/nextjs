"use client";
import { useState, useEffect, useRef } from 'react';

const Togglemenu = ({toggletext,heading, customclassName, firstitem}) => {
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

  const list = []
    
  for (const [i, item] of toggletext.entries()) {
    list.push(
        <li>
            <a href="#" className="flex flex-row items-center pl-4 pr-4 py-2 text-base text-[#9ca3af] focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-gray-100 focus:bg-gray-100 hover:text-colorRed hover:bg-red">
            {item.text}</a>
        </li>
    );
    }

  return (
    <>
    { customclassName == "locationdtoggle" && 
    <div className=" mainpagealldropdown border border-gray-200 mt-[9px] h-[66px]" ref={ref}>
      <div onClick={toggleMenu} className="flex flex-row items-center pt-4 hover:text-colorRed focus:outline-none">
          <span onClick={toggleMenu} className="mx-2 w-[55%] text-[#9ca3af] pl-4">{firstitem}</span>
          <span onClick={toggleMenu} className='relative right-[-110px] top-[1px] text-[red]'><i className="fa-solid fa-chevron-down"></i></span>
      </div>

        {isOpen && (
            <ul className={`${customclassName} shadow-sm shadow-[#e5e7eb] relative w-[100%] left-[0%] top-[20px] z-[100] block appearance-none py-1 px-2 mb-1 text-base leading-normal bg-white text-[#9ca3af] rounded`}>
                {list}
            </ul>
        )}
    </div>}

    { customclassName == "whereclass"  && 
    <div className="md:w-1/4 pr-4 sm:w-full pl-4 pt-4 pb-2 mainpagealldropdown" ref={ref}>
    
        <label>{heading}</label>
        <div onClick={toggleMenu} className="flex flex-row items-center pt-4 hover:text-colorRed focus:outline-none">
            <span onClick={toggleMenu} className="mx-2">{firstitem}</span>
            <span onClick={toggleMenu} className='relative right-[-110px] top-[1px] text-[red]'><i className="fa-solid fa-chevron-down"></i></span>
        </div>

        {isOpen && (
            <ul className={`${customclassName} absolute w-[20.92%] left-[42.35%] z-[100] block appearance-none py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 rounded`}>
                {list}
            </ul>
        )}
    </div>}

    { customclassName == "priceclass" && 
    <div className="md:w-1/4 pr-4 sm:w-full pl-4 pt-4 pb-2 mainpagealldropdown" ref={ref}>
    
        <label>{heading}</label>
        <div onClick={toggleMenu} className="flex flex-row items-center pt-4 hover:text-colorRed focus:outline-none">
            <span onClick={toggleMenu} className="mx-2">{firstitem}</span>
            <span onClick={toggleMenu} className='relative right-[-110px] top-[1px] text-[red]'><i className="fa-solid fa-chevron-down"></i></span>
        </div>

        {isOpen && (
            <ul className={`${customclassName} absolute w-[20.92%] left-[42.35%] z-[100] block appearance-none py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 rounded`}>
                {list}
            </ul>
        )}
    </div>}
    </>
  );
};

export default Togglemenu;
