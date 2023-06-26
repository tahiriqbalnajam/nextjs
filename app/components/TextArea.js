import React from 'react';


const TextArea = ({ id, name, onChange, rows, cols, placeholder, className }) => {
  return (
    <textarea 
    id={id} 
    name={name} 
    rows={rows} 
    cols={cols} 
    onChange={onChange} 
    placeholder={placeholder} 
    className={(className) ?? 'block appearance-none mt-1 w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-[#797979]'} >
    </textarea>
  );
}

export default TextArea;