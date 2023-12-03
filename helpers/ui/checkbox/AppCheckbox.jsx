'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Check, ChevronDown, Flag } from 'react-feather';

const AppCheckbox = ({
  iconLeft = <Flag className="w-4 h-4 font-thin" />,
  iconRight = <ChevronDown className="w-4 h-4 font-thin" />,
  title = 'Status',
  checkboxData
}) => {
  const appCheckboxRef = useRef();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClickOutside = (event) => {
    if (appCheckboxRef.current && !appCheckboxRef.current?.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };
  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="relative inline-block" ref={appCheckboxRef}>
      <div className="relative inline-block">
        <button
          className="text-gray-600 relative hover:text-gray-800 bg-white font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center"
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div className="flex items-center">
            <span className="mr-2">{iconLeft}</span>
            <span>{title}</span>
            {iconRight && <span className="ml-2">{iconRight}</span>}
          </div>
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 top-10 mt-2 bg-white border border-gray-300 rounded-lg shadow-md z-10 w-max">
            <div className="p-5">
              <div className="py-5 font-thin text-gray-500 grid grid-cols-2">
                {checkboxData.map((checkbox) => (
                  <label key={checkbox.id} className="flex items-center py-2 px-2 cursor-pointer">
                    <input type="checkbox" className="h-4 w-4 mr-2" />
                    {checkbox.text}
                  </label>
                ))}
              </div>
            </div>
            <div className="border-t border-gray-500" />
            <div className="p-5">
              <div className="border-gray-300 flex justify-between">
                <button
                  type="button"
                  className="px-4 py-2 mr-2 text-gray-600 hover:text-gray-800 font-light text-sm"
                >
                  Clear
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-sky-500 text-white hover:bg-sky-700 rounded-md flex gap-2 font-light text-sm"
                >
                  <Check className="w-5 h-5" />
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppCheckbox;
