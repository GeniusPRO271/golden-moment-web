import React from 'react';

const Logo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-8 h-8">
      <g fill="currentColor" clipPath="url(#clip0)">
        <path d="M12 2C12 2 15.4 5.4 15.4 9C15.4 12.6 12 16 12 16S8.6 12.6 8.6 9C8.6 5.4 12 2 12 2Z" />
        <path d="M13 4C13 4 10.5 6.5 10.5 9C10.5 11.5 13 14 13 14S15.5 11.5 15.5 9C15.5 6.5 13 4 13 4Z" />
        <path d="M9 11C9 11 11 13 11 13S13 11 13 11S11 9 11 9S9 11 9 11Z" />
        <path d="M6 17H18V19H6V17Z" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Logo;

