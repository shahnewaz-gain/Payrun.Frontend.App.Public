'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Search, X } from 'react-feather';
import Image from 'next/image';
import { size } from 'lodash';
import { getFirstLetterOFFirstLastWord } from '@/utils';

const AppMultiSelect = ({
  items,
  onAdd,
  onRemove,
  showAvatar = true,
  selectedValues = [],
  searchable = true,
  showSearchIcon = true,
  title = 'Search & select...',
  options: { onSearch } = {}
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState(selectedValues);
  const [searchTerm, setSearchTerm] = useState('');
  const multiDropdownRef = useRef();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  const filteredItems = items?.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const itemsWithoutSelected = filteredItems?.filter(
    (item) => !selectedItems.some((selectedItem) => selectedItem.id === item.id)
  );

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleAddItem = (item) => {
    if (!selectedItems.some((i) => i.id === item.id)) {
      setSelectedItems([...selectedItems, item]);
      onAdd(item);
      setIsDropdownOpen(false);
      setSearchTerm('');
    }
  };

  const handleRemoveItem = (item) => {
    const newSelectedItems = selectedItems.filter((i) => i.id !== item.id);
    setSelectedItems(newSelectedItems);
    onRemove(item);
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };

  const handleClickOutside = (event) => {
    if (multiDropdownRef.current && !multiDropdownRef.current?.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="relative border rounded-xl" ref={multiDropdownRef}>
      {!size(selectedItems) && (
        <div role="button" tabIndex="0" className="p-2" onClick={toggleDropdown}>
          <div className="flex items-center pt-1 pl-1">
            <span className="text-border mr-2">{showSearchIcon && <Search size={18} />}</span>
            <p className="text-border first-letter-capitalize">{title}</p>
          </div>
        </div>
      )}

      <div className="flex flex-wrap pt-2 px-2">
        {selectedItems?.map((item) => (
          <div
            key={item?.id}
            className="flex items-center space-x-2 mb-2 bg-gray-100 rounded-3xl p-2 mx-1"
          >
            {showAvatar &&
              (item?.avatar ? (
                <Image
                  width={750}
                  height={750}
                  src={item.avatar}
                  alt={item.title}
                  className="w-6 h-6 ml-1 rounded-full"
                />
              ) : (
                <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-[12px]">
                  {item?.title ? getFirstLetterOFFirstLastWord(item.title) : ''}
                </div>
              ))}
            <span
              className={`font-regular text-regular first-letter-capitalize text-sm ${
                showAvatar ? '' : 'ml-2'
              }`}
            >
              {item.title}
            </span>
            <button type="button" className="p-1" onClick={() => handleRemoveItem(item)}>
              <X className="text-border" size={18} />
            </button>
          </div>
        ))}
        {size(selectedItems) ? (
          <button type="button" className="text-border ml-2" onClick={toggleDropdown}>
            +add new
          </button>
        ) : (
          ''
        )}
      </div>

      {isDropdownOpen && (
        <div className="absolute top-full z-50 left-0 mt-2 w-2/3 border rounded-md shadow-xl bg-white overflow-y-auto no-scrollbar max-h-60">
          {searchable && (
            <div className="p-2 border-b">
              <input
                type="text"
                className="w-full p-2 focus:outline-0 text-sm"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
              />
            </div>
          )}

          {size(itemsWithoutSelected) ? (
            itemsWithoutSelected.map((item) => (
              <div
                role="button"
                tabIndex="0"
                key={item.id}
                onClick={() => handleAddItem(item)}
                className="flex items-center px-4 py-2 cursor-pointer"
              >
                {showAvatar &&
                  (item?.avatar ? (
                    <Image
                      src={item.avatar}
                      alt={item.title}
                      width={750}
                      height={750}
                      className="w-10 h-10 rounded-full mr-3 p-0.5 bg-white ring-1 ring-border-light"
                    />
                  ) : (
                    <div className="w-7 h-7 rounded-full mr-3 bg-blue-500 text-white flex items-center justify-center text-[12px]">
                      {item?.title ? getFirstLetterOFFirstLastWord(item.title) : ''}
                    </div>
                  ))}
                <div className="flex flex-col">
                  <span className="font-regular text-regular text-sm first-letter-capitalize">
                    {item.title}
                  </span>
                  {item.label && (
                    <span className="font-normal text-12 text-border">{item.label}</span>
                  )}
                </div>
                {selectedItems.some((i) => i.id === item.id) && (
                  <button type="button" onClick={() => handleRemoveItem(item)}>
                    <X size={18} />
                  </button>
                )}
              </div>
            ))
          ) : (
            <div className="p-4 text-center font-regular text-regular text-14">Nothing to show</div>
          )}
        </div>
      )}
    </div>
  );
};

export default AppMultiSelect;
