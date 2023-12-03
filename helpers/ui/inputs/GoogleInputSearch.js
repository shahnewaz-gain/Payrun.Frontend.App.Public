'use client';

import React, { useState } from 'react';
import { usePlacesWidget } from 'react-google-autocomplete';
import { GoogleIcon } from '@/helpers/ui/customSvg';

const GoogleInputSearch = ({
  callback,
  setValue,
  value,
  placeholder,
  context,
  handleChangeGoogleAddress,
  options: { isCustomIcon = false, isChange = false } = {}
}) => {
  const [defaultStateMapLocation, setDefaultStateMapLocation] = useState('');
  const [border, setBorder] = useState(false);
  const options = {
    fields: ['address_components', 'geometry', 'icon', 'name', 'formatted_address', 'place_id'],
    strictBounds: false,
    types: ['geocode']
  };
  const { ref } = usePlacesWidget({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
    language: 'en',
    onPlaceSelected: (place) => {
      setDefaultStateMapLocation(place.formatted_address);
      callback(place, context);
    },
    options
  });

  const handleChange = (e) => {
    setValue((prev) => ({ ...prev, name: e.target.value }));
    if (e.target.value === '') {
      callback({}, context);
    }
    if (defaultStateMapLocation) {
      setDefaultStateMapLocation('');
    }
  };

  return (
    <div className="relative">
      <input
        value={value || ''}
        onChange={(e) => handleChange(e)}
        id="pac-input"
        className={`p-2 text-14 font-normal w-full text-dark border border-border-light rounded-md focus:outline-none focus:border-brand py-2 pl-4 placeholder:text-14 placeholder:font-normal ${
          !isChange ? 'border-r-0' : ''
        }`}
        type="text"
        ref={ref}
        placeholder={placeholder}
        onFocus={() => setBorder(true)}
        onBlur={() => setBorder(false)}
      />
      {isCustomIcon &&
        (isChange ? (
          <span
            role="button"
            tabIndex="0"
            className={`absolute inset-y-0 right-0 flex items-center px-4 border-l-0 ${
              border ? 'border-brand' : ''
            }`}
            onClick={() => handleChangeGoogleAddress(false)}
          >
            <GoogleIcon />
          </span>
        ) : (
          <span
            className={`absolute inset-y-0 right-0 flex items-center px-4 border-l-0 ${
              border ? 'border-brand' : ''
            }`}
          >
            <GoogleIcon />
          </span>
        ))}
    </div>
  );
};

export default GoogleInputSearch;
