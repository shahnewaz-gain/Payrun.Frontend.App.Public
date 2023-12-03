/* eslint-disable no-useless-escape */

'use client';

import Cookies from 'js-cookie';
import dayjs from 'dayjs';

// env
export const getApiBaseUrl = () => process.env.NEXT_PUBLIC_API_BASE_URL;
export const getPublicSiteUrl = () => process.env.NEXT_PUBLIC_SITE_URL;
export const stage = process.env.NEXT_PUBLIC_STAGE;

// tokens
export const getAccessToken = () => Cookies.get('accessToken') || '';
export const getIdToken = () => Cookies.get('idToken') || '';
export const getRefreshToken = () => Cookies.get('refreshToken') || '';

export const checkEmailForValid = (value) => {
  const regex = /^[\w%\+\-]+(\.[\w%\+\-]+)*@[\w%\+\-]+(\.[\w%\+\-]+)+$/;
  return regex.test(value);
};

export const capitalizeFirstLetter = (str) => str?.charAt(0).toUpperCase() || '';

export const getUserFullName = (f_name, l_name) => {
  let name = '';
  if (f_name) name = f_name;
  if (l_name) name = `${name} ${l_name}`;

  return name;
};

export const getStringWithoutUnderscore = (value = '') => value?.split('_')?.join(' ') || '';

export const checkURLForValid = (userInput = '') =>
  !!userInput.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );

export const getDateFromMonthStringForDatePicker = (monthString = 'january') => {
  const months = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11
  };
  const number = monthString ? months[monthString.toLowerCase()] : 0;

  return dayjs().month(number);
};

export const validatedTextInputField = (value) => value?.indexOf(' ') !== 0;

export const getImageNameFromUrl = (path) => path?.split('/')?.slice(-1) || '';

export const getUidByIndex = (index, key) => `${key || 'item'}-${index}`;

export const isImageFile = (fileName) => {
  if (!fileName) return false;

  const ext = fileName.split('.').pop();
  return ['jpg', 'png', 'jpeg', 'gif', 'svg'].includes(ext.toLowerCase());
};

export const getCapitalizeFirstWord = (string = '') =>
  string ? string.charAt(0).toUpperCase() + string.slice(1) : '';
