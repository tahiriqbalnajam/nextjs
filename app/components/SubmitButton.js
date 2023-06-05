import React from 'react'

const SubmitButton = ({value, handleSubmit }) => {
  return (
    <input 
    type="submit" 
    value={value}
    onClick={handleSubmit} 
    className="py-4 px-8 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
    />
  );
}

export default SubmitButton;
