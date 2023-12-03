'use client';

import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';
import { ChevronRight, ChevronLeft } from 'react-feather';
import dayjs from 'dayjs';

const InlineDatePicker = ({
  options: {
    defaultDate = dayjs(),
    format = 'DD-MM-YYYY',
    placeholder = 'Select a date',
    isFooter = true,
    onChangeCallBack = () => {},
    clearBtnCallBack = () => {}
  } = {}
}) => {
  // states
  const [date, setDate] = useState(defaultDate);

  useState(() => {
    setDate(defaultDate);
  }, [defaultDate]);

  // handle change date
  const onChangeHandler = (event) => {
    setDate(event);
    onChangeCallBack(event);
  };

  // clear date
  const handleClearButton = () => {
    clearBtnCallBack('');
    setDate('');
  };

  const customFooter = () => (
    <div className="flex items-end justify-end mr-6 text-brand-secondary text-sm font-normal py-3">
      <button type="button" onClick={handleClearButton}>
        Clear
      </button>
    </div>
  );

  return (
    <Space
      direction="vertical"
      style={{
        width: '100%'
      }}
    >
      <DatePicker
        showToday={false}
        value={date}
        placeholder={placeholder}
        style={{
          width: '100%'
        }}
        renderExtraFooter={isFooter ? customFooter : ''}
        format={format}
        onChange={onChangeHandler}
        superNextIcon={<ChevronRight />}
        superPrevIcon={<ChevronLeft />}
        className="picker-main single-date-picker"
        nextIcon=""
        prevIcon=""
      />
    </Space>
  );
};

export default InlineDatePicker;
