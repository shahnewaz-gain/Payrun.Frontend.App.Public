'use client';

import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Clock } from 'react-feather';
import { TimePicker } from 'antd';

const AppTimePicker = ({
  time = '20:00',
  format = 'HH:mm',
  onTimeChange = () => {},
  options: { isClear = false, customClass = 'w-72' } = {}
}) => {
  const [value, setValue] = useState(dayjs(time, format));

  const handleTimeChange = (item) => {
    setValue(item);

    if (onTimeChange) {
      onTimeChange(item ? item.format(format) : null);
    }
  };

  useEffect(() => {
    if (isClear) {
      const newTime = dayjs(time, format);
      setValue(newTime);
    }
  }, [isClear]);

  return (
    <div className="my-2">
      <TimePicker
        value={value}
        onChange={handleTimeChange}
        format={format}
        className={`relative h-10 ${customClass}`}
        popupClassName="custom-ok-button"
        suffixIcon={<Clock size={18} />}
      />
    </div>
  );
};

export default AppTimePicker;
