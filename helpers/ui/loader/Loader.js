import React from 'react';

const Loader = () => (
  <div className="flex justify-center items-center space-x-2">
    <div className="bg-blue-500 w-2 h-2 rounded-full animate-bounce" />
    <div className="bg-blue-500 w-2 h-2 rounded-full animate-bounce delay-75" />
    <div className="bg-blue-500 w-2 h-2 rounded-full animate-bounce delay-150" />
  </div>
);

export default Loader;
