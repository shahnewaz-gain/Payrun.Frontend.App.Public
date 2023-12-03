'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import { size } from 'lodash';
import useMediaQuery from '@/helpers/hooks/useMediaQuery';

const AppSelect = ({
  options,
  selectType = 'input',
  defaultSelected = {},
  selectedOptionClass = 'text-gray-deep',
  placeholderText = 'Title',
  sideDot = false,
  clearable = true,
  optionProps: { context = '', isDisabled = false, callback = () => {} } = {}
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultSelected);
  const appSelectRef = useRef();
  const isMobileScreen = useMediaQuery('(max-width: 768px)');
  const selectedOptionTitle = selectedOption?.title_two || selectedOption?.title || '';

  // change default value
  useEffect(() => {
    setSelectedOption(defaultSelected || {});
  }, [defaultSelected?.id, defaultSelected?.title]);

  const toggleSelect = () => {
    if (!isDisabled) {
      setIsOpen((prevState) => !prevState);
    }
  };

  const handleOptionSelect = (option) => {
    if (clearable && selectedOption?.id === option.id) {
      setSelectedOption({});
      callback({}, context);
    } else {
      setSelectedOption(option);
      callback(option, context);
    }
    toggleSelect();
  };

  const sortedOptions = useMemo(() => {
    let updatedOptions = options || [];
    if (selectedOption?.id) {
      updatedOptions = options.filter(
        (option) =>
          (selectedOption.key && option.key !== selectedOption.key) ||
          (selectedOption.id && option.id !== selectedOption.id)
      );
      updatedOptions.unshift(selectedOption);
    }

    return updatedOptions;
  }, [selectedOption, options]);

  const handleClickOutside = (event) => {
    if (!appSelectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const ChevronIcon = isOpen ? ChevronUp : ChevronDown;

  const getKey = (key, id) => key || id;

  return (
    <div className="relative" ref={appSelectRef}>
      {selectType === 'input' && (
        <>
          <input
            type="text"
            className={`w-full ${selectedOptionClass} font-regular text-sm p-2 border first-letter-capitalize border-gray rounded focus:outline-none placeholder:text-border`}
            value={selectedOptionTitle}
            placeholder={placeholderText}
            onClick={toggleSelect}
            disabled={isDisabled}
            readOnly
          />
          <div className="absolute inset-y-0 right-0 flex items-center space-x-2 pr-2">
            <ChevronIcon className="w-5 h-5 text-gray-400 cursor-pointer" onClick={toggleSelect} />
          </div>
        </>
      )}

      {selectType === 'dropdown' && (
        <div className="flex items-center gap-2">
          <span className={`text-sm font-regular ${selectedOptionClass}`}>
            {selectedOptionTitle || placeholderText}
          </span>
          <ChevronIcon className="w-4 h-4 mt-1 text-gray-400" onClick={toggleSelect} />
        </div>
      )}

      {isOpen && (
        <div>
          <div
            className={`absolute p-1 top-full z-[100] left-0 mt-2 my-10 ${
              !isMobileScreen ? 'w-max pe-3' : 'w-full'
            } rounded-md shadow-box-shadow bg-white overflow-y-auto no-scrollbar max-h-60`}
          >
            <ul>
              {size(sortedOptions) ? (
                sortedOptions?.map((item) => {
                  const isActive =
                    (item.key && selectedOption?.key === item.key) ||
                    (item.id && selectedOption?.id === item.id);

                  return (
                    <li key={getKey(item.key, item.id)} className="flex items-center">
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => handleOptionSelect(item)}
                        className={`mx-2 flex items-center font-regular first-letter-capitalize text-sm whitespace-nowrap w-full ps-3 pe-8 py-2 ${
                          isActive ? 'text-brand bg-blue-soft rounded-lg ' : 'text-regular p-2'
                        }`}
                      >
                        {sideDot && (
                          <span
                            className="w-2 h-2 rounded-full mr-2"
                            style={{ backgroundColor: item?.color }}
                          />
                        )}
                        {item?.title_two || item?.title}
                      </div>
                    </li>
                  );
                })
              ) : (
                <li
                  role="menuitem"
                  className="mx-2 w-full ps-3 pe-8 py-2 text-regular text-sm"
                  onClick={toggleSelect}
                >
                  Nothing to show
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppSelect;
