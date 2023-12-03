'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

const MonthPicker = () => {
  const currentMonthIndex = new Date().getMonth();
  const [selectedMonth, setSelectedMonth] = useState(currentMonthIndex);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const incrementYear = () => {
    setSelectedYear(selectedYear + 1);
  };

  const decrementYear = () => {
    setSelectedYear(selectedYear - 1);
  };

  return (
    <div className="text-center mt-2 w-max">
      <div className="flex w-full justify-between items-center">
        <button onClick={decrementYear}>
          <ChevronLeft className="text-gray-deep font-thin w-5 h-5" />
        </button>
        <input
          type="text"
          className="w-20 text-center text-brand-secondary bg-white border-o rounded p-1 text-sm"
          placeholder="Year"
          value={selectedYear}
          onChange={handleYearChange}
        />
        <button onClick={incrementYear}>
          <ChevronRight className="text-gray-deep font-thin w-5 h-5" />
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2 my-4">
        {Array.from({ length: 12 }, (month, i) => (
          <button
            key={i}
            className={`h-8 w-14 relative flex items-center justify-center font-light text-sm text-gray-deep ${
              selectedMonth === i ? 'bg-brand text-white' : 'bg-white'
            } rounded`}
            onClick={() => setSelectedMonth(i)}
          >
            {new Date(selectedYear, i, 1).toLocaleString('default', {
              month: 'short'
            })}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MonthPicker;
