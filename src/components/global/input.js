import React from 'react';

// Define the Input component accepting props
export const Input = ({ id, name, type = 'text', autoComplete, placeholder, value, onChange, className }) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      autoComplete={autoComplete ? 'on' : 'off'} // Ensure autoComplete is effectively applied
      className={`appearance-none rounded-none relative block w-full px-3 py-2 border-b border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange} // Pass onChange prop to the native input element
    />
  );
};

export const TextField = ({ id, name, autoComplete, placeholder, value, onChange, className, rows }) => {
  return (
    <textarea
      id={id}
      name={name}
      autoComplete={autoComplete ? 'on' : 'off'} // Ensure autoComplete is effectively applied
      className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange} // Pass onChange prop to the native textarea element
      rows={rows || 3} // Default to 3 rows if not specified
    />
  );
};