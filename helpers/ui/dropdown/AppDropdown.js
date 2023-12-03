'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { size } from 'lodash';
import { Check, ChevronDown } from 'react-feather';
import { Loader } from '@/helpers/ui';

const AppDropdown = ({
  id,
  isActive,
  toggleDropdown,
  loadingMore = false,
  chevronLeft = '',
  iconLeft = '',
  iconRight = <ChevronDown style={{ width: '16px', height: '16px' }} />,
  title = '',
  data,
  selectedItem,
  onItemSelected,
  searchable = true,
  width = 'w-72',
  btnWidth = 'w-max',
  selectedStyle = false,
  titleTypeDropdown = false,
  position = 'right-0',
  btnWithBg = false
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data?.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleItemClick = (item) => {
    if (onItemSelected) {
      onItemSelected(item);
    }
    toggleDropdown(item.id);
    setSearchTerm('');
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current?.contains(event.target)) {
      toggleDropdown(null);
    }
  };

  useEffect(() => {
    if (isActive) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isActive]);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {titleTypeDropdown ? (
        <div
          tabIndex={0}
          className={`text-brand-secondary flex justify-between gap-2 items-center ${btnWidth}`}
          role="button"
          onClick={() => toggleDropdown(id)}
        >
          <h5 className="font-medium text-18 ">{title}</h5>
          <div> {iconRight}</div>
        </div>
      ) : (
        <button
          id={`dropdownButton-${id}`}
          data-dropdown-toggle="dropdownSearch"
          data-dropdown-placement="bottom"
          className={` ${
            btnWithBg
              ? 'bg-yellow text-white rounded-lg hover:text-gray-200'
              : 'bg-white text-regular rounded-full hover:text-gray-800'
          }  box-shadow font-medium text-sm px-5 md:px-5 py-2.5 flex md:justify-between justify-center items-center ${btnWidth}`}
          type="button"
          onClick={() => toggleDropdown(id)}
        >
          <div className="flex text-14 font-medium items-center ">
            {chevronLeft && <span className="mr-2">{chevronLeft}</span>}
            {iconLeft && <span className="mr-2">{iconLeft}</span>}
            <span>{title}</span>
            {iconRight && <span className="ml-2">{iconRight}</span>}
          </div>
        </button>
      )}

      <div
        id={`dropdown-${id}`}
        className={`z-10 mt-2 absolute top-100 ${position} ${
          isActive ? '' : 'hidden'
        } bg-white overflow divide-y rounded-lg shadow ${width}`}
      >
        {searchable && (
          <div className="py-3 ps-3 border-0">
            <label for="input-group-search" className="sr-only">
              Search
            </label>

            <div className="relative ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" />
              <input
                type="text"
                id="input-group-search"
                className="block focus:outline-0 w-full p-2 text-sm text-gray-900"
                placeholder="Search & select..."
                value={searchTerm}
                onChange={handleInputChange}
              />
            </div>
          </div>
        )}
        <ul
          className="h-72 px-3 pb-3 pt-2 overflow-y-auto no-scrollbar text-sm text-gray-700"
          aria-labelledby="dropdownSearchButton"
        >
          {size(filteredData) > 0 ? (
            <>
              {filteredData.map((item) => (
                <li key={item.id} className="cursor-pointer">
                  <button
                    type="button"
                    className="w-full text-left focus:outline-none p-0 border-none bg-transparent"
                    onClick={() => handleItemClick(item)}
                  >
                    <div className="flex justify-between items-center pl-2 rounded">
                      <div className="flex items-center ">
                        {item?.img && (
                          <Image
                            src={item.img}
                            width={750}
                            height={750}
                            alt={`${item?.name} image`}
                            className="w-9 h-8 rounded-full shadow-lg"
                          />
                        )}
                        <label
                          htmlFor={`checkbox-item-${item?.name}`}
                          className="w-full cursor-pointer py-2 ml-2 text-sm font-medium text-gray-900 rounded "
                        >
                          <input
                            type="checkbox"
                            id={`checkbox-item-${item?.name}`}
                            className="hidden"
                          />
                          <div
                            className={`font-light ${
                              item?.name === selectedItem?.name && selectedStyle
                                ? 'text-brand bg-blue-light rounded-lg ps-2 pe-8 py-1'
                                : 'text-regular'
                            } `}
                          >
                            {item?.title && (
                              <h5 className="text-brand-secondary font-normal text-14">
                                {item.title}
                              </h5>
                            )}
                            {item?.name}
                          </div>
                          {item?.description && (
                            <p className="text-xs text-gray-500 ">{item.description}</p>
                          )}
                        </label>
                      </div>
                      {item?.name === selectedItem?.name && !selectedStyle && (
                        <Check className="w-5 h-5 text-brand-secondary" />
                      )}
                    </div>
                  </button>
                </li>
              ))}

              {loadingMore && (
                <li className="flex justify-center items-center py-2">
                  <Loader />
                </li>
              )}
            </>
          ) : (
            <li className="flex justify-center items-center h-full">
              <span className="text-gray-500">Nothing to show</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
export default AppDropdown;
