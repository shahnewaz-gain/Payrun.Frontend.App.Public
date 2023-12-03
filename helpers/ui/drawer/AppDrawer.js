/* eslint-disable no-unused-vars */

'use client';

import { size } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { Check, X } from 'react-feather';
import useMediaQuery from '@/helpers/hooks/useMediaQuery';

const AppDrawer = ({
  Content = '',
  sections = {},
  id = 'app-drawer',
  isDrawerOpen = false,
  hideDrawer,
  callback
}) => {
  const isMobileScreen = useMediaQuery('(max-width:768px)');
  const drawerRef = useRef();
  const defaultSections = {
    attendance: {
      title: 'Attandance',
      values: ['Working', 'On leave', 'Not working']
    },
    employmentStatus: {
      title: 'Employment status',
      values: ['Probation', 'Permanent', 'Ad-hoc', 'Terminated', 'Canceled']
    },
    userStatus: {
      title: 'User status',
      values: ['Invited', 'Active', 'Inactive', 'Historical']
    }
  };

  const [drawerSections, setDrawerSection] = useState(size(sections) ? sections : defaultSections);

  const drawerClass = isDrawerOpen ? '' : 'translate-x-full';

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current?.contains(event.target)) {
      hideDrawer();
    }
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDrawerOpen]);

  return (
    <div className="font-sans" ref={drawerRef}>
      <div
        id={id}
        className={`fixed top-0 right-0 z-50 h-screen overflow-y-auto no-scrollbar  bg-white ${
          isMobileScreen ? 'w-full' : 'w-80'
        } shadow-lg transition-transform duration-300 ${drawerClass}`}
        tabIndex="-1"
        aria-labelledby="drawer-label"
      >
        <div className="flex justify-between  items-center border-b p-6">
          <h4 className="text-lg font-medium text-gray-900">
            {isMobileScreen ? 'Filters' : 'More Filters'}
          </h4>
          <button
            type="button"
            onClick={hideDrawer}
            className="p-2 hover:bg-gray-100 rounded-full focus:outline-none"
          >
            <X size={24} className="text-gray-600 hover:text-gray-800" />
          </button>
        </div>
        {!isMobileScreen ? (
          <div className="p-4">
            <div className="space-y-6">
              {Object.entries(drawerSections).map(([key, object]) => (
                <div key={key}>
                  <h5 className="mb-3 text-md font-semibold text-gray-800">{object.title}</h5>
                  <div className="grid grid-cols-2 gap-3">
                    {object?.values.map((option) => (
                      <label key={option} className="inline-flex items-center">
                        <input type="checkbox" className="mr-2 transform scale-100" />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                  <hr className="my-6 border-t border-gray-200" />
                </div>
              ))}
            </div>
            <div className="mt-6">
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={callback}
                  className="flex items-center mr-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-6 py-2 focus:outline-none transition"
                >
                  <Check size={18} className="mr-2" />
                  Apply
                </button>
                <span role="button" tabIndex={0} onClick={hideDrawer} className="cursor-pointer">
                  Clear
                </span>
              </div>
            </div>
          </div>
        ) : (
          <Content />
        )}
      </div>
    </div>
  );
};

export default AppDrawer;
