import React from 'react';


const ButtonLink = ({ textlow, texthigh}) => {
  return (
    <h2 className='text-4xl font-medium'>{textlow} <span className='font-bold'>{texthigh}</span> </h2>
  );
}

export default ButtonLink