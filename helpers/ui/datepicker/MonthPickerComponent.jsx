'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'react-feather';
import MonthPicker from '@/helpers/ui/datepicker/MonthPicker.jsx';

const MonthPickerComponent = () => {
  const monthPickerRef = useRef();
  const [isMonthPickerOpen, setIsMonthPickerOpen] = useState(false);

  const handleClickOutside = (event) => {
    if (monthPickerRef.current && !monthPickerRef.current?.contains(event.target)) {
      setIsMonthPickerOpen(false);
    }
  };
  useEffect(() => {
    if (isMonthPickerOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMonthPickerOpen]);
  return (
    <div className="relative" ref={monthPickerRef}>
      <button
        className="text-regular box-shadow hover:text-gray-800 bg-white font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center  "
        type="button"
        onClick={() => setIsMonthPickerOpen(!isMonthPickerOpen)}
      >
        <div className="flex text-14 font-medium items-center">
          <span className="mr-2">
            <ChevronLeft className="w-4 h-4 text-gray-deep" />
          </span>
          <span className="mr-2">
            <Calendar className="w-4 h-4 text-gray-deep" />
          </span>
          <span>This Month</span>
          <span className="ml-2">
            <ChevronRight className="w-4 h-4 text-gray-deep" />
          </span>
        </div>
      </button>
      {isMonthPickerOpen && (
        <div className="absolute right-0 z-10 bg-white p-4 rounded-lg top-12 shadow-md">
          <MonthPicker />
        </div>
      )}
    </div>
  );
};

export default MonthPickerComponent;
