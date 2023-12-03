'use client';

import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';
import { ChevronRight, ChevronLeft, Calendar } from 'react-feather';
import dayjs from 'dayjs';

/*

Allowed picker types: ['week', 'month']

*/

const FilterDatePicker = ({
  pickerType = 'week',
  onChangeCallBack = () => {},
  clearBtnCallBack = () => {},
  placeholderText = 'This month',
  options: {
    defaultDate = dayjs(),
    customClass = 'absolute',
    inputType = 'button',
    isFooter = true
  }
}) => {
  // variables
  const isStaticInput = inputType === 'static';

  // states
  const [date, setDate] = useState(defaultDate);
  const [selectedValue, setSelectedValue] = useState('');
  const months = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'Aug',
    8: 'Sept',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec'
  };

  useState(() => {
    setDate(defaultDate);
  }, [defaultDate]);

  const onChangeHandler = (event, callBackWeek) => {
    setDate(event);

    if (pickerType === 'week') {
      const weekNumber = callBackWeek.split('-')?.[1].replace(/th/g, '');
      const startingDate = dayjs(`${event?.$y}-01-01`).add(weekNumber - 1, 'week');

      const endingDate = startingDate.add(6, 'day');
      setSelectedValue(`${startingDate.format('YYYY-MM-DD')} - ${endingDate.format('YYYY-MM-DD')}`);
    } else if (pickerType === 'month') {
      if (isStaticInput) {
        setSelectedValue(event.format('MMMM'));
      } else {
        setSelectedValue(`${months[event?.$M]}, ${event?.$y}`);
      }
    }
    onChangeCallBack(event);
  };

  const monthPickerOpenHandler = () => {
    const pickerMain = document.querySelector('.picker-main');
    if (pickerMain) {
      pickerMain.click();
    }
  };

  const handleClearButton = () => {
    setSelectedValue('');
    clearBtnCallBack();
    setDate(defaultDate);
  };

  const customFooter = () => (
    <div className="flex items-end justify-end mr-6">
      <button
        type="button"
        className="text-brand-secondary text-sm font-normal py-3"
        onClick={handleClearButton}
      >
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
      {isStaticInput ? (
        <div
          role="button"
          tabIndex="0"
          className="flex items-center justify-between border border-gray rounded-lg py-2 px-3 cursor-pointer"
          onClick={monthPickerOpenHandler}
        >
          <p className="text-dark font-14 font-normal">{selectedValue || placeholderText}</p>
          <p className="">
            <Calendar className="text-border font-14 font-normal" width="18" height="18" />
          </p>
        </div>
      ) : (
        <button
          className={`${customClass} text-regular box-shadow hover:text-gray-800 bg-white font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center`}
          type="button"
          onClick={monthPickerOpenHandler}
        >
          <div className="flex text-14 font-medium items-center">
            <span className="mr-2">
              <ChevronLeft className="w-4 h-4 text-gray-deep" />
            </span>
            <span className="mr-2">
              <Calendar className="w-4 h-4 text-gray-deep" />
            </span>
            <span className="selected-value">{selectedValue || placeholderText}</span>
            <span className="ml-2">
              <ChevronRight className="w-4 h-4 text-gray-deep" />
            </span>
          </div>
        </button>
      )}

      <DatePicker
        status="error"
        picker={pickerType}
        value={date || dayjs(new Date())}
        style={{
          width: '30%',
          visibility: 'hidden'
        }}
        renderExtraFooter={isFooter ? customFooter : ''}
        onChange={onChangeHandler}
        superNextIcon={<ChevronRight />}
        superPrevIcon={<ChevronLeft />}
        className="picker-main"
        popupClassName={isStaticInput ? 'hide-ant-header' : ''}
        nextIcon=""
        prevIcon=""
      />
    </Space>
  );
};

export default FilterDatePicker;
