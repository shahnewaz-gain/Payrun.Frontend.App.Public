'use client';

import { useState } from 'react';
import { Search } from 'react-feather';
import { AppNothingToShow } from '@/helpers/ui';

const AppTabs = ({ tabData, callback, isInitialLoading, searchField = false }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleActiveTab = (index, tab) => {
    setActiveTab(index);
    if (callback) callback(tab);
  };

  return (
    <>
      <div className={`${searchField ? 'flex justify-between' : 'inline-block'} mx-8 py-10 `}>
        <div className="ms-4 bg-white rounded-lg p-1 flex flex-wrap text-center gap-[5px]">
          {tabData?.map((tab, index) => (
            <button
              type="button"
              key={tab?.id}
              className={`inline-block text-sm font-medium px-[30px] py-2 ${
                index === activeTab ? 'bg-blue-soft text-brand' : ' text-regular'
              } rounded-md`}
              onClick={() => tab?.content && handleActiveTab(index, tab)}
            >
              <span className="px-[30px] capitalize text-sm ">{tab.label}</span>
            </button>
          ))}
        </div>
        {searchField && (
          <div className="relative">
            <input
              type="text"
              placeholder="Search job post"
              className="w-80 py-2 pl-8 pr-4 rounded-full border border-gray-300 focus:outline-none focus focus:border-slate-400"
            />

            <div className="absolute inset-y-0 right-4 top-2 text-gray-500 hover:text-blue-500 hover:shadow-md text-2xl cursor-pointer">
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
    </>
  );
};

export default AppTabs;
