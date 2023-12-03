/* eslint-disable no-unused-vars */

'use client';

import React, { useState } from 'react';
import dayjs from 'dayjs';
import { DatePicker, Space } from 'antd';
import { ChevronRight, ChevronLeft, Calendar } from 'react-feather';

const { RangePicker } = DatePicker;

/* usage:
  const [val, setVal] = useState(dayjs().add(0, 'd').$d); // today date will be default value
    
    return <FilterDateRangePicker setSelectedItemValue={setVal} />;
*/

const FilterDateRangePicker = ({ clearBtnCallBack = () => {}, setSelectedItemValue }) => {
  const [options, setOptions] = useState([
    { title: 'Today', context: 'today', active: true },
    { title: 'Yesterday', context: 'yesterday', active: false },
    { title: 'This week', context: 'thisWeek', active: false },
    { title: 'Last week', context: 'lastWeek', active: false },
    { title: 'This month', context: 'thisMonth', active: false },
    { title: 'Last month', context: 'lastMonth', active: false },
    { title: 'Custom', context: 'custom', active: false }
  ]);

  const [selectedValue, setSelectedValue] = useState({
    title: '',
    value: ''
  });

  const [availableRanges, setAvailableRanges] = useState({
    today: dayjs().add(0, 'd').$d,
    yesterday: dayjs().add(-1, 'd').$d,
    thisWeek: {
      startingDate: dayjs().startOf('week').$d,
      endingDate: dayjs().endOf('week').$d
    },
    lastWeek: {
      startingDate: dayjs().subtract(1, 'week').startOf('week').$d,
      endingDate: dayjs().subtract(1, 'week').endOf('week').$d
    },
    thisMonth: {
      startingDate: dayjs().startOf('month').$d,
      endingDate: dayjs().endOf('month').$d
    },
    lastMonth: {
      startingDate: dayjs().subtract(1, 'month').startOf('month').$d,
      endingDate: dayjs().subtract(1, 'month').endOf('month').$d
    }
  });

  const monthPickerOpenHandler = () => {
    const pickerMain = document.querySelector('.picker-main');
    if (pickerMain) {
      pickerMain.click();
    }
  };

  const selectedRangeHandler = (item) => {
    let currentValue = {};
    const selectedItem = options.find((option) => option.context === item.context);
    const otherItems = options.map((option) => ({ ...option, active: false }));
    if (!item.active) {
      setOptions([
        { ...selectedItem, active: true },
        ...otherItems.filter((option) => option.context !== item.context)
      ]);
    }
    if (item.context === 'custom') {
      monthPickerOpenHandler();
      currentValue = { ...prevData, title: item?.title };
    }
    if (item.context !== 'custom') {
      currentValue = { title: item?.title, value: availableRanges[item.context] };
    }
    setSelectedValue({ ...currentValue });
    setSelectedItemValue(currentValue);
  };

  const customDatePickerHandler = (event) => {
    const currentValue = {
      title: 'Custom',
      value: {
        startingDate: event[0]?.$d,
        endingDate: event[1]?.$d
      }
    };
    setSelectedValue({ ...currentValue });
    setSelectedItemValue({ ...currentValue });
  };

  const handleClearButton = () => {
    setSelectedValue('');
    clearBtnCallBack();
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

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="m-10">
      <div className="">
        <div className="flex">
          <button
            className="text-regular box-shadow hover:text-gray-800 bg-white font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center  "
            type="button"
            onClick={toggleDropdown}
          >
            <div className="flex text-14 font-medium items-center">
              <span className="mr-2">
                <ChevronLeft className="w-4 h-4 text-dark" />
              </span>
              <span className="mr-2">
                <Calendar className="w-4 h-4 text-dark" />
              </span>
              <span className="selected-value text-dark font-normal font-poppins text-14">
                {selectedValue.title || 'Today'}
              </span>
              <span className="ml-2">
                <ChevronRight className="w-4 h-4 text-dark" />
              </span>
            </div>
          </button>
          <div className="relative">
            <RangePicker
              onChange={customDatePickerHandler}
              superNextIcon={<ChevronRight />}
              superPrevIcon={<ChevronLeft />}
              nextIcon=""
              prevIcon=""
              className="picker-main"
              style={{
                visibility: 'hidden'
              }}
              renderExtraFooter={customFooter}
            />
          </div>
        </div>
        {isOpen ? (
          <div className="bg-white-light w-[200px] rounded-[10px] mt-2">
            <ul className="py-2 px-3">
              {options.map((item) => (
                <li
                  className={`py-1 pl-2 mt-2 cursor-pointer ${
                    item?.active
                      ? 'text-brand bg-blue-soft rounded-[8px]'
                      : 'text-regular leading-[20px]'
                  }`}
                  onClick={() => selectedRangeHandler(item)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
export default FilterDateRangePicker;
