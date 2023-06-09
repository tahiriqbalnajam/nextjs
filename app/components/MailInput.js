import React from 'react';

const MailInput = ({ type, value, onChange, placeholder }) => {
  return (
    <input 
    type={(type) ? type : 'password'}
    value={value} 
    onChange={onChange} 
    placeholder={placeholder} 
    className="bg-fieldGray h-13 p-3 w-full border-none focus:outline-none focus:shadow-outline" />
  );
}

export default MailInput;