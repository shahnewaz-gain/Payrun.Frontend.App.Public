import React from 'react';
import Image from 'next/image';
import { getFirstLetterOFFirstLastWord } from '@/utils';

const Tooltip = ({ userRole }) => (
  <div className="absolute bg-gray-100 text-slate-500 text-xs px-2 py-1 bottom-3.5 rounded whitespace-no-wrap opacity-0 group-hover:opacity-100 transition-opacity w-max">
    {userRole}
  </div>
);

const AppAvatar = ({
  singleAvatar,
  singleImgSrc = '/assets/images/avatar.png',
  avatarSize,
  UserRoleIcon = '',
  userRole = '',
  iconSize,
  anchorClass,
  avatarSpacing,
  imagesSrc,
  showMoreIcon = true,
  borderColor = 'gray-300',
  borderWidth = '1',
  options: { title = '', imageLimit = 10 } = {}
}) => {
  const commonClass = `${
    avatarSize || 'w-12 h-12'
  }  border-1 border-white rounded-full dark:border-slate-400`;
  const defaultIconSize = 'w-3 h-3';
  const actualIconSize = iconSize || defaultIconSize;
  const images = [
    {
      id: 1,
      src: '/assets/images/avatar.png'
    },
    {
      id: 2,
      src: '/assets/images/avatar.png'
    },
    {
      id: 3,
      src: '/assets/images/avatar.png'
    },
    {
      id: 4,
      src: '/assets/images/avatar.png'
    }
  ];
  const imageObj = imagesSrc || images;

  return (
    <div className="flex justify-center">
      {singleAvatar ? (
        <div className="relative inline-block group">
          {(() => {
            if (singleImgSrc) {
              return (
                <Image
                  className={`${avatarSize} p-0.5 rounded-full ring-${borderWidth} ring-${borderColor} cursor-pointer`}
                  src={singleImgSrc}
                  alt="User"
                  width={24}
                  height={24}
                />
              );
            }
            if (title) {
              return (
                <div className="w-[44px] h-[44px] mx-1 my-1.5 rounded-full bg-blue-light-800 flex items-center justify-center ring-2 p-px ring-border-light ring-offset-1 tooltip-trigger">
                  <p className="text-brand font-medium text-sm py-1">
                    {getFirstLetterOFFirstLastWord(title)}
                  </p>
                </div>
              );
            }
            return '';
          })()}

          {UserRoleIcon && (
            <div className="relative">
              <span className="absolute inline-flex bg-yellow-400 text-white text-xs font-medium mr-2 p-1 rounded-full -bottom-1 -right-2 group-hover:block cursor-pointer">
                <UserRoleIcon className={actualIconSize} />
              </span>
              <Tooltip userRole={userRole} />
            </div>
          )}
        </div>
      ) : (
        <div className={`flex ${avatarSpacing || '-space-x-4'}`}>
          {imageObj?.map(
            (item, index) =>
              index <= imageLimit && (
                <Image
                  key={item?.id}
                  className={`p-0.5 rounded-full bg-white ring-1 ring-${borderColor} ${commonClass}`}
                  src={item?.src}
                  alt={item?.label || 'User'}
                  width={24}
                  height={24}
                />
              )
          )}
          {showMoreIcon && imageObj?.length > 4 && (
            <div
              className={`${anchorClass} ${commonClass} flex items-center justify-center text-xs font-medium text-black bg-gray-100 border-2`}
            >
              +{imageObj.length - 4}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default AppAvatar;
