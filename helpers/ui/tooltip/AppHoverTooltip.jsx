import React from 'react';

const AppHoverTooltip = ({
  Icon = '',
  text = '',
  hoverBg = false,
  background = 'bg-white',
  textColor = 'text-black',
  paddingBottom = 'bottom-8',
  shadow = true,
  options: { customClass = '' } = {}
}) => (
  <div className="relative inline-block group">
    <div
      className={`cursor-pointer first-letter:tooltip-trigger text-gray-400 ${
        hoverBg ? 'hover:bg-gray-light p-3 rounded-full' : ''
      } ${customClass}`}
    >
      <div className="flex justify-center items-center w-8 h-8">
        <Icon className="w-5 h-5" />
      </div>
    </div>
    <div
      className={`absolute ${background} ${
        shadow ? 'shadow-lg' : ''
      } ${textColor} text-xs font-thin px-2 py-1 ${paddingBottom} -left-1/2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-50`}
    >
      {text}
    </div>
  </div>
);

export default AppHoverTooltip;
