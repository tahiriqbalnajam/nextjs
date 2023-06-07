import React from 'react';


const Button = ({ type, text, onChange, placeholder, className }) => {
  return (
    <button 
    type={(type) ?? 'button'} 
    className={(className) ?? ' text-white bg-salmon hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-20 py-3.5 mr-2 mb-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none  dark:focus:ring-blue-800'}
    >
      {(text) ?? 'Submit'}
    </button>
  );
}

export default Button;