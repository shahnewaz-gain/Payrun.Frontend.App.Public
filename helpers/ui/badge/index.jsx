import React from 'react';

const AppBadge = ({
  badgeColor = '',
  badgeText = '',
  Icon = '',
  textAndIcon = false,
  onlyIcon = false,
  iconClassName = '',
  iconRight = false,
  options: {
    customClass = '',
    toolTipText = '',
    isTooltip = false,
    toolTipClass = 'text-border text-12 font-normal',
    iconWidthHeight = '16px',
    isCapitialize = false,
    isDynamicStyles = false,
    dynamicBg = '',
    dynamicColor = ''
  } = {}
}) => {
  const getBadgeStyles = () => {
    const Styles = {
      green: { bg: 'bg-green-light', text: 'text-green' },
      blue: { bg: 'bg-blue-light', text: 'text-blue' },
      red: { bg: 'bg-red-light', text: 'text-red' },
      yellow: { bg: 'bg-yellow-light', text: 'text-yellow' },
      indigo: { bg: 'bg-indigo-200', text: 'text-indigo-800' },
      purple: { bg: 'bg-purple-200', text: 'text-purple-800' },
      pink: { bg: 'bg-pink-200', text: 'text-pink-800' },
      gray: { bg: 'bg-gray-light', text: 'text-gray-deep' },
      default: { bg: 'bg-slate-200', text: 'text-slate-800' }
    };

    return Styles[badgeColor] || Styles.default;
  };

  const { bg, text } = getBadgeStyles();
  const dynamicStyles = isDynamicStyles ? { background: dynamicBg, color: dynamicColor } : {};

  return (
    <div
      className={`inline-flex items-center ${customClass} ${onlyIcon ? ' ' : ''} ${
        isTooltip && 'relative group'
      }`}
    >
      {onlyIcon && Icon && (
        <span
          className={`${
            !isDynamicStyles ? `${bg} ${text}` : ''
          } font-thin p-1 rounded-full tooltip-trigger`}
          style={dynamicStyles}
        >
          <Icon className={iconClassName} width={iconWidthHeight} height={iconWidthHeight} />
        </span>
      )}
      {!onlyIcon && (
        <span
          className={`text-sm font-normal px-2.5 py-1 rounded-full ${
            !isDynamicStyles ? `${bg} ${text}` : ''
          }`}
          style={dynamicStyles}
        >
          {(() => {
            if (textAndIcon) {
              if (iconRight) {
                return (
                  <span className={`flex gap-2 ${isCapitialize ? 'capitalize' : ''}`}>
                    {badgeText}
                    <Icon className={iconClassName} />
                  </span>
                );
              }
              return (
                <span className={`flex gap-2 ${isCapitialize ? 'capitalize' : ''}`}>
                  <Icon className={iconClassName} />
                  {badgeText}
                </span>
              );
            }
            return (
              <span className={`flex items-center ${isCapitialize ? 'capitalize' : ''}`}>
                {badgeText}
              </span>
            );
          })()}
        </span>
      )}

      {isTooltip && (
        <div
          className={`absolute shadow-lg ${toolTipClass} bg-white px-2 py-1 bottom-7 -left-full rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity capitalize`}
        >
          {toolTipText}
        </div>
      )}
    </div>
  );
};

export default AppBadge;
