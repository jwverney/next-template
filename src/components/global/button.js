import React from 'react';

const Button = ({ children, onClick, className = '', ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-highlight text-white rounded px-3 py-1 mx-2 text-sm hover:bg-blue-200 hover:text-black ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;