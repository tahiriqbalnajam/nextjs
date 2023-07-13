import React from 'react';

const ButtonLink = ({ href, text, onChange, placeholder }) => {
  return (
    <a href={href} className="text-white bg-salmon font-medium text-2xl px-8 py-4">{text}</a>
  );
}

export default ButtonLink