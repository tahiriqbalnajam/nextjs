"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [progress, setProgress] = useState(0);
  const total = 100;
  const increment = 2;

  useEffect(() => {
    const updateProgressBar = () => {
      setProgress((prevProgress) => prevProgress + increment);

      if (progress < total) {
        setTimeout(updateProgressBar, 100); // Adjust the timeout value for the desired animation speed
      }
    };

    updateProgressBar();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-0 bg-gray-200 rounded-full dark:bg-gray-700">
    <div className="w-full h-1 bg-gray-200 rounded">
      <div
        className="h-full bg-[#FF5A5E] rounded"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
    </div>
  );
}
