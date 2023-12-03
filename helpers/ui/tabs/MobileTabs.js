'use client';

import { useState } from 'react';
import { ChevronDown, Menu, Search } from 'react-feather';
import { useDispatch } from 'react-redux';
import { sidebarOpen } from '@/redux/sidebar/sidebarSlice';
import { AppNothingToShow } from '@/helpers/ui';

const MobileTabs = ({ tabData, isInitialLoading, callback, searchField = false }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  const handleActiveTab = (index, tab) => {
    setActiveTab(index);
    if (callback) callback(tab);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="mx-6 py-4 relative flex flex-col gap-5">
        <div className="flex justify-between w-full">
          <div className="bg-transparent w-[12%]">
            <div
              role="button"
              tabIndex={0}
              className="text-gray-500 bg-white font-medium h-12 w-12 px-3 py-2 rounded-md flex items-center"
              onClick={() => dispatch(sidebarOpen())}
            >
              <Menu className="w-8 h-8" />
            </div>
          </div>
          <div className="w-[82%] sm:w-[85%] bg-white shadow-md rounded-lg p-1 flex items-center justify-between relative">
            <div className="w-[85%]">
              {tabData.map((tab, index) => (
                <div key={tab.id} className={`${index === activeTab ? '' : 'hidden'}`}>
                  <input
                    type="text"
                    className="text-14 font-medium ms-2 py-2 bg-blue-soft text-brand rounded-md text-center w-full"
                    value={tab.label}
                    disabled
                  />
                </div>
              ))}
            </div>
            <div
              role="button"
              tabIndex={0}
              className="px-4 flex  items-center justify-end  w-[20%]"
              onClick={toggleDropdown}
            >
              <span>
                <ChevronDown className="text-gray-deep w-6 h-6" />
              </span>
            </div>
            {isDropdownOpen && (
              <div className="w-full mt-1 bg-white rounded-lg text-center p-2 absolute top-12 right-0 z-10 shadow-lg">
                {tabData?.map((tab, index) => (
                  <button
                    type="button"
                    key={tab?.id}
                    className={`text-left w-full text-14 font-medium px-5 py-2 ${
                      index === activeTab ? 'bg-blue-soft text-brand' : 'text-regular'
                    } rounded-md`}
                    onClick={() => tab?.content && handleActiveTab(index, tab)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        {searchField && (
          <div className="relative">
            <input
              type="text"
              placeholder="Search job post"
              className="w-full py-2 pl-8 pr-4 rounded-full border border-gray-300 focus:outline-none focus focus:border-slate-400"
            />
            <div className="absolute inset-y-0 right-4 top-2 text-gray-500 hover:text-blue-500 bg-transparent md:hover:shadow-md text-2xl cursor-pointer">
              <Search />
            </div>
          </div>
        )}
      </div>
      <div>
        {!isInitialLoading ? (
          tabData[activeTab].content
        ) : (
          <AppNothingToShow loading={isInitialLoading} />
        )}
      </div>
    </div>
  );
};

export default MobileTabs;
