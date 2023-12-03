export const handleSetCity = (addresses, name) => {
  let result = '';

  addresses.forEach((address) => {
    const addressTypes = address?.types || [];
    const cityName = name === 'long_name' ? address?.long_name : address?.short_name;

    if (
      addressTypes.includes('locality') ||
      addressTypes.includes('administrative_area_level_1') ||
      addressTypes.includes('administrative_area_level_2')
    ) {
      if (!cityName.includes(' ')) {
        result = cityName;
      }
    }
  });
  return result;
};

export const handleSetCountry = (addresses, name) => {
  let result = '';

  addresses.forEach((address) => {
    const addressTypes = address?.types || [];

    if (addressTypes.includes('country')) {
      result = address[name];
    }
  });
  return result;
};

export const handleSetStreetNumberORCityOrCode = (addresses, context) => {
  let result = '';

  addresses.forEach((address) => {
    const addressTypes = address?.types || [];

    if (addressTypes.includes(context)) {
      result = address?.long_name;
    }
  });
  return result;
};
