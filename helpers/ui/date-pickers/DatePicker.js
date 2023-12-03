/* eslint-disable no-unused-vars */

'use client';

import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';
import { ChevronRight, ChevronLeft } from 'react-feather';
import dayjs from 'dayjs';

/*
Example of "onChangeHandler":

const [selectedValue, setSelectedValue] = useState('');
const onChangeHandler = (event) => {
    setSelectedValue(`${months[event?.$M]}, ${event?.$y}`);
  };

Example of "handleClearButton":

 const handleClearButton = () => {
    setSelectedValue('');
  };

### Example of different types of allowed formats:
  const dateFormat = 'YYYY/MM/DD';
  const weekFormat = 'MM/DD';
  const monthFormat = 'YYYY/MM';

  Assign current date as default value: pass dayjs() to the "defaultValue" props

  More details: https://ant.design/components/date-picker#components-date-picker-demo-format
*/

const CustomDatePicker = ({
  width = '30%',
  defaultValue = dayjs(),
  placeholderText = 'Select a date',
  onChangeHandler = () => {},
  handleClearButton = () => {}
}) => {
  const customFooter = () => (
    <div className="flex items-end justify-end mr-6">
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
        status="error"
        style={{
          width,
          border: '1px solid #D8E0ED',
          height: '44px'
        }}
        defaultValue={defaultValue}
        renderExtraFooter={customFooter}
        onChange={onChangeHandler}
        placeholder={placeholderText}
        superNextIcon={<ChevronRight />}
        superPrevIcon={<ChevronLeft />}
        className="picker-main"
        popupClassName="w-80"
        nextIcon=""
        prevIcon=""
      />
    </Space>
  );
};

export default CustomDatePicker;
