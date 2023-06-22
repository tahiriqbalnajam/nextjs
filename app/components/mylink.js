'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Loader from './loader.js';

const MyLink = ({ href, className, children, ...rest }) => {
  const [showSection, setShowSection] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setShowHeader(true);
    setShowSection(false);

  };

  return (
    <>        
      {showHeader}
      <Link onClick={handleClick} className={className} href={href} {...rest}>
        {isLoading ? <Loader /> : children}
        {isLoading ? children : ''}
      </Link>
    </>
  );
};

export default MyLink;
