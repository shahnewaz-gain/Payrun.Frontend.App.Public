import React, { useState, useEffect, useRef } from 'react';
import { Calendar } from 'react-feather';
import DatePicker from '@/helpers/ui/datepicker/DatePicker.jsx';

const DatePickerInput = ({ value = '', placeholder = '', Icon = Calendar }) => {
  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);
  const datePickerRef = useRef();
  const [defaultValue, setDefaultValue] = useState(value || '');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (datePickerRef.current && !datePickerRef.current?.contains(event.target)) {
        setIsOpenDatePicker(false);
      }
    };
    if (isOpenDatePicker) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpenDatePicker]);
  return (
    <div className="relative">
      <input
        type="text"
        className="w-full p-2 border rounded-lg pl-4 text-sm font-thin"
        placeholder={placeholder}
        value={defaultValue}
        onChange={(e) => setDefaultValue(e.target.value)}
        onClick={() => setIsOpenDatePicker(!isOpenDatePicker)}
      />
      <div className="absolute top-2.5 right-3">
        <Icon className="w-5 h-5 text-gray-deep" />
      </div>
      {isOpenDatePicker && (
        <div className="absolute w-full mt-2 " ref={datePickerRef}>
          <DatePicker inline />
        </div>
      )}
    </div>
  );
};

export default DatePickerInput;
