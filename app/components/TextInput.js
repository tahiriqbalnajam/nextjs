import React from 'react';


const TextInput = ({ value, onChange, placeholder }) => {
  return (
    <input 
    type="text" 
    value={value} 
    onChange={onChange} 
    placeholder={placeholder} 
    className="bg-fieldGray h-16 p-3 w-full border-none focus:outline-none focus:shadow-outline" />
  );
}

export default TextInput;