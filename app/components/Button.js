import React from 'react';


const Button = ({ type, text, onChange, placeholder, className }) => {
  return (
    <button 
    type={(type) ?? 'button'} 
    className={(className) ?? ' text-white bg-salmon hover:bg-[#f82c2f] focus:ring-4 focus:bg-[#f82c2f] font-medium text-sm px-20 py-3.5 mr-2 mb-2  dark:bg-[#f82c2f] dark:hover:bg-[#f82c2f] focus:outline-none  dark:focus:bg-[#f82c2f]'}
    >
      {(text) ?? 'Submit'}
    </button>
  );
}

export default Button;