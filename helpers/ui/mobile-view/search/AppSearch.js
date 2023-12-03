'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { size } from 'lodash';
import { Loader } from '@/helpers/ui';

const AppSearch = ({
  toggleDropdown,
  loadingMore = false,
  data,
  selectedItem,
  onItemSelected,
  searchable = true,
  selectedStyle = false
}) => {
  const [searchTerm, setSearchTerm] = useState('');

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

  return (
    <div className="">
      <div
        className={`z-10 mt-2 
        bg-white overflow divide-y `}
      >
        {searchable && (
          <div className="py-3 border-0">
            <label for="input-group-search" className="sr-only">
              Search
            </label>

            <div className="relative ">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" />
              <input
                type="text"
                id="input-group-search"
                className="block focus:outline-0 w-full text-sm text-gray-900"
                placeholder="Search & select..."
                value={searchTerm}
                onChange={handleInputChange}
              />
            </div>
          </div>
        )}
        <ul className=" pb-3 pt-2 text-sm text-gray-700">
          {size(filteredData) > 0 ? (
            <>
              {filteredData.map((item) => (
                <li key={item.id} className="cursor-pointer">
                  <button
                    type="button"
                    className="w-full text-left focus:outline-none border-none bg-transparent"
                    onClick={() => handleItemClick(item)}
                  >
                    <div className="flex items-center rounded">
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
                          className="w-full cursor-pointer py-2 ml-2 text-14 font-medium text-regular rounded "
                        >
                          <input
                            type="checkbox"
                            id={`checkbox-item-${item?.name}`}
                            className="hidden"
                          />
                          <p
                            className={` ${
                              item?.name === selectedItem?.name && selectedStyle
                                ? 'text-brand bg-blue-light rounded-lg ps-2 pe-8 py-1'
                                : 'text-14 font-medium text-regular'
                            } `}
                          >
                            {item?.name}
                          </p>
                          {item?.description && (
                            <p className="text-12 font-normal text-border">{item.description}</p>
                          )}
                        </label>
                      </div>
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
export default AppSearch;
