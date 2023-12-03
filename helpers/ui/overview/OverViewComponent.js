import React from 'react';
import { Loader } from '@/helpers/ui';

const OverViewComponent = ({ overViewData = [], loading = false }) => {
  const generateBorder = (index) => {
    if (index === 0) {
      return '';
    }
    if (index % 2 === 1) {
      return 'border-l my-2';
    }
    return 'md:border-l my-2';
  };

  return (
    <div className="mt-4 bg-white p-3 md:p-6 rounded-md min-h-[10rem] md:min-h-[5rem]">
      {!loading ? (
        <div className="flex flex-wrap ">
          {overViewData?.map((dataItem, index) => (
            <div
              key={dataItem.id}
              className={`w-1/2 md:w-1/4 text-left px-4 border-gray-300 ${generateBorder(index)}`}
            >
              <div className={`text-24 font-semibold ${dataItem?.color || ''}`}>
                {dataItem?.amount.toString().padStart(2, '0')}
              </div>
              <div className="text-border text-14 font-normal">{dataItem?.name}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[10rem] md:min-h-[5rem]">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default OverViewComponent;
