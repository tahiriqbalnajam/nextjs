import React from 'react';


const TextInput = ({ type, className, value, onChange, placeholder, name, id }) => {
  return (
    <input 
    type={(type) ?? 'text'}
    value={value} 
    onChange={onChange} 
    name={name} 
    id={id} 
    placeholder={placeholder} 
    className={(className) ?? 'bg-fieldGray h-16 p-3 w-full border-none focus:outline-none focus:shadow-outline'} />
  );
}

export default TextInput;