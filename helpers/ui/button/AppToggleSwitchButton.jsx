'use client';

import React from 'react';

const AppToggleSwitchButton = ({
  checked,
  onChange = () => {},
  label = '',
  labelClass = '',
  activeToggleBg = '',
  isLabelBadge = false,
  disabled = false,
  toggleSize = 'w-11 h-6',
  circleSize = 'w-5 h-5'
}) => (
  <label
    className={`relative inline-flex items-center ${
      disabled ? 'opacity-75 cursor-not-allowed' : 'cursor-pointer'
    }`}
  >
    <input
      type="checkbox"
      className="sr-only"
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />

    {/* Background of the toggle */}
    <div
      className={`${toggleSize} rounded-full transition-colors ${
        checked ? `${activeToggleBg || 'bg-blue-500'}` : 'bg-gray-deep'
      }`}
    />

    {/* Circle that moves */}
    <div
      className={`absolute ${circleSize} rounded-full mx-1 bg-white shadow-md transform transition-transform ${
        checked ? 'translate-x-[calc(100%-5px)]' : 'translate-x-1px'
      }`}
    />

    {isLabelBadge ? (
      <span className={`ml-2 text-12 font-medium px-3.5 py-1 rounded-full ${labelClass}`}>
        {label}
      </span>
    ) : (
      <span className={`ml-3 text-sm font-medium text-gray-900 ${labelClass}`}>{label}</span>
    )}
  </label>
);

export default AppToggleSwitchButton;
