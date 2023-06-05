import React from 'react';


const TextInput = ({ type, value, onChange, placeholder }) => {
  return (
    <input 
    type={(type) ?? 'text'}
    value={value} 
    onChange={onChange} 
    placeholder={placeholder} 
    className="bg-fieldGray h-16 p-3 w-full border-none focus:outline-none focus:shadow-outline" />
  );
}

export default TextInput;