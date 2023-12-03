'use client';

import React from 'react';
import Image from 'next/image';
import { Plus } from 'react-feather';
import { getFirstLetterOFFirstLastWord } from '@/utils';

const AppDefaultAvatar = ({
  images = [],
  isShowAddButton = true,
  callBack = () => {},
  options: { isTooltip = true, toolTipClass = 'text-border text-12 font-normal' } = {}
}) => {
  const uid = (i) => `image-${i}`;

  return (
    <div className="flex flex-wrap justify-start items-center">
      {images?.map((item, index) => {
        const imgSrc = item?.src || item?.avatar;

        return (
          <div key={uid(index)} className="relative group">
            {imgSrc ? (
              <Image
                className="w-[34px] h-[34px] rounded-full mx-1 my-1.5 ring-2 p-px ring-border-light object-none tooltip-trigger"
                width={34}
                height={34}
                src={imgSrc}
                alt="Rounded avatar"
              />
            ) : (
              <div className="w-[34px] h-[34px] mx-1 my-1.5 rounded-full bg-blue-light-800 flex items-center justify-center ring-2 p-px ring-border-light ring-offset-1 tooltip-trigger">
                <p className="text-brand font-medium text-sm">
                  {item?.title ? getFirstLetterOFFirstLastWord(item?.title) : ''}
                </p>
              </div>
            )}
            {isTooltip && item?.title && (
              <div
                className={`absolute shadow-lg ${toolTipClass} bg-white px-4 py-2 bottom-full -left-full rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity capitalize`}
              >
                <p className="text-dark font-medium text-14 text-center">{item?.title}</p>
                {item?.label && (
                  <p className="text-border text-12 font-normal text-center">{item.label}</p>
                )}
              </div>
            )}
          </div>
        );
      })}

      {isShowAddButton && (
        <button
          type="button"
          className="w-7.2 h-7.2 ml-1 text-brand-secondary border border-brand-secondary font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
          onClick={callBack}
        >
          <Plus width="20px" height="20px" className="text-brand-secondary" />
          <span className="sr-only">Icon description</span>
        </button>
      )}
    </div>
  );
};
export default AppDefaultAvatar;
