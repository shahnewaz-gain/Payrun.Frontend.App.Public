'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, MoreHorizontal } from 'react-feather';

const AppActionDropdown = ({
  actions = [],
  callback = () => {},
  ActionButton = false,
  title = 'Title',
  btnType = 'btn_primary',
  btnWidth = ''
}) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const iconRef = useRef(null);

  const generateBtnType = (type) => {
    let color = '';
    switch (type) {
      case 'btn_primary':
        color = 'brand';
        break;
      case 'btn_warning':
        color = 'yellow';
        break;
      case 'btn_danger':
        color = 'red';
        break;
      default:
        color = 'gray';
        break;
    }
    return color;
  };

  const buttonColor = generateBtnType(btnType);

  const handleClickOutside = (event) => {
    const isIconClick = iconRef.current?.contains(event.target);
    const isDropdownClick = dropdownRef.current?.contains(event.target);

    if (!isIconClick && !isDropdownClick) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    if (isDropdownVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup: remove listener when component is unmounted
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownVisible]);

  return (
    <>
      {ActionButton ? (
        <button
          ref={iconRef}
          type="button"
          className={`${btnWidth} px-5 py-2 text-white bg-${buttonColor} flex gap-2 items-center justify-center rounded-lg`}
          onClick={() => setDropdownVisible(!isDropdownVisible)}
        >
          {title} <ChevronDown className="w-5 h-5" />
        </button>
      ) : (
        <button
          ref={iconRef}
          type="button"
          onClick={() => setDropdownVisible(!isDropdownVisible)}
          className="cursor-pointer font-bold text-gray-500 hover:bg-gray-200 rounded-full border-none bg-transparent p-2"
        >
          <MoreHorizontal />
        </button>
      )}

      {isDropdownVisible && (
        <ul
          ref={dropdownRef}
          className="absolute right-4 md:right-0 w-52 mt-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
        >
          {actions?.map(
            (action, index) =>
              action.show && (
                <li
                  key={action?.id}
                  className={`w-full px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                    index === 0 ? 'rounded-t-lg' : ''
                  } ${index === actions.length - 1 ? 'rounded-b-lg' : ''}`}
                  role="menuitem"
                  onClick={() => {
                    callback(action);
                    setDropdownVisible(false);
                  }}
                >
                  <button
                    type="button"
                    className="w-full h-full text-14 font-medium text-regular text-left flex gap-2 whitespace-nowrap"
                    style={{ background: 'none', border: 'none' }}
                  >
                    {action?.icon && action?.icon}
                    {action?.label}
                  </button>
                </li>
              )
          )}
        </ul>
      )}
    </>
  );
};

export default AppActionDropdown;
