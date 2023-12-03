'use client';

import React from 'react';
import { DatePicker, Space } from 'antd';
import { ChevronRight, ChevronLeft } from 'react-feather';

const { RangePicker } = DatePicker;

const InlineDateRangePicker = ({
  disabled = false,
  onChangeHandler = () => {},
  defaultValue = [],
  disabledDays = []
}) => {
  const disabledDate = (current) => disabledDays?.includes(current.day());

  return (
    <Space direction="vertical">
      <RangePicker
        open
        style={{
          width: '30%',
          height: '-50px',
          visibility: 'hidden'
        }}
        defaultValue={defaultValue}
        onChange={onChangeHandler}
        disabledDate={disabledDate}
        disabled={disabled}
        superNextIcon=""
        superPrevIcon=""
        className="custom-inline-date-range-picker"
        popupClassName="custom-inline-date-range-picke-popup"
        nextIcon={<ChevronRight size={18} />}
        prevIcon={<ChevronLeft size={18} />}
      />
    </Space>
  );
};

export default InlineDateRangePicker;
