'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Check } from 'react-feather';
import { size } from 'lodash';
import useMediaQuery from '@/helpers/hooks/useMediaQuery';
import { isValidHexaCode } from '@/utils';

const AppColorPicker = ({
  defaultSelectCode = '2C67FF',
  colors = [],
  Label = () => '',
  callback = () => {}
}) => {
  const [allColors, setAllColors] = useState(colors || []);
  const [selectedColorCode, setSelectedColorCode] = useState(defaultSelectCode);
  const [value, setValue] = useState(`#${selectedColorCode}`);
  const [isShowColorPicker, setIsShowColorPicker] = useState(false);
  const colorPickerRef = useRef(null);
  const isMobileScreen = useMediaQuery('(max-width: 768px)');

  // check valid hex code
  const isValidHexCode = isValidHexaCode(value);

  const handleClickOutside = (event) => {
    if (colorPickerRef.current && !colorPickerRef.current?.contains(event.target)) {
      setIsShowColorPicker(false);
      setValue(`#${defaultSelectCode}`);
      setSelectedColorCode(defaultSelectCode);
    }
  };

  useEffect(() => {
    setAllColors(colors);
  }, [size(colors)]);

  useEffect(() => {
    setSelectedColorCode(defaultSelectCode);
  }, [defaultSelectCode]);

  useEffect(() => {
    if (isShowColorPicker) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isShowColorPicker]);

  const handleSelectedColor = (code) => {
    setValue(`#${code}`);
    setSelectedColorCode(code);
  };

  const handleApply = () => {
    const updatedValue = value?.replace('#', '');

    if (!allColors?.includes(updatedValue)) {
      setAllColors((prev) => [...prev, updatedValue]);
      setSelectedColorCode(updatedValue);
      callback(updatedValue);
    } else {
      callback(selectedColorCode);
    }

    setIsShowColorPicker(!isShowColorPicker);
  };

  return (
    <div className="relative inline-block" ref={colorPickerRef}>
      {/* label */}
      <Label handleClick={() => setIsShowColorPicker(!isShowColorPicker)} />

      {/* color picker */}
      <div
        id="color-picker-dropdown-button"
        className={`z-10 mt-2 ${
          isMobileScreen
            ? 'fixed top-[35%] left-[12%] shadow-2xl'
            : 'absolute top-100 left-0 shadow'
        } ${isShowColorPicker ? 'active' : 'hidden'} bg-white overflow divide-y rounded-lg ${
          size(allColors) > 24 ? 'w-307' : 'w-292'
        }`}
      >
        <div className="p-5 text-sm text-gray-700">
          <div className="h-[168px] overflow-y-auto overflow-x-hidden">
            <div className="grid grid-cols-6 gap-0">
              {allColors.map((code) => (
                <div
                  key={code}
                  role="button"
                  tabIndex="0"
                  className="relative h-[42px] w-[42px]"
                  style={{ backgroundColor: `#${code}` }}
                  onClick={() => handleSelectedColor(code)}
                >
                  {code === selectedColorCode && (
                    <Check
                      className="absolute text-white font-semibold left-2.5 top-2.5"
                      width="20px"
                      height="20px"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-14 font-medium text-dark leading-6">Hex Code</p>
            <div className="flex items-center justify-between">
              <div>
                <input
                  type="text"
                  name="colorCode"
                  className="border border-gray text-gray-900 text-14 rounded-lg block w-8/12 mt-1 py-2 px-3"
                  placeholder="Color code"
                  value={value || ''}
                  onChange={(e) => setValue(e.target.value || '')}
                />
                {!isValidHexCode && (
                  <span className="d-block text-red font-12">Please enter valid hex code!</span>
                )}
              </div>
              <span
                role="button"
                tabIndex="0"
                className={`text-brand-secondary text-14 font-medium pr-2 ${
                  !isValidHexCode ? 'opacity-75 pointer-events-none cursor-not-allowed' : ''
                }`}
                onClick={handleApply}
              >
                OK
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppColorPicker;
