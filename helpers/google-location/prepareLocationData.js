import {
  handleSetCity,
  handleSetCountry,
  handleSetStreetNumberORCityOrCode
} from '@/helpers/google-location/getLocation';

const prepareLocationData = (item) => ({
  name: item?.name,
  placeId: item?.place_id,
  countryShortName: handleSetCountry(item?.address_components, 'short_name') || 'Not available',
  lat: Number(item?.geometry?.location?.lat()) || 0,
  lng: Number(item?.geometry?.location?.lng()) || 0,
  city: handleSetCity(item?.address_components, 'long_name') || 'not available',
  cityPlaceId: handleSetCity(item?.address_components, 'short_name') || 'not available',
  country: handleSetCountry(item?.address_components, 'long_name') || 'not available',
  streetNumber: handleSetStreetNumberORCityOrCode(item?.address_components, 'street_number') || '',
  sublocality: handleSetStreetNumberORCityOrCode(item?.address_components, 'sublocality') || '',
  postalCode: handleSetStreetNumberORCityOrCode(item?.address_components, 'postal_code') || ''
});

export default prepareLocationData;
