'use client';

import { onError } from '@apollo/client/link/error';
import { debounce, size } from 'lodash';
import {
  removeStorageDataForUnauthorizedUser,
  handleUnauthorizedUser,
  handleLogOut,
  toastAlert
} from '@/utils';

const redirectToLoginPage = () => {
  const { protocol } = window.location;

  removeStorageDataForUnauthorizedUser();
  window.location.replace(`${protocol}//${window.location.host}/login`);
};

const delayErrorMessage = debounce((statusCode) => {
  if (statusCode === 401 || statusCode === 503) {
    toastAlert('error', 'Unauthorized', 'top-right');
    redirectToLoginPage();
  } else if (statusCode === 404) {
    toastAlert('error', 'Not found!', 'top-right');
  } else if (statusCode === 500) {
    toastAlert('error', 'Internal server error!', 'top-right');
  } else {
    toastAlert('error', 'Something went wrong! Please try again.', 'top-right');
  }
}, 1000);

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (size(graphQLErrors)) {
    graphQLErrors.forEach(({ message }) => {
      if (message === 'account_deactivated') {
        toastAlert('error', 'You have been deactivated!', 'top-right');
        setTimeout(() => {
          handleLogOut(true);
        }, 500);
      } else if (message === 'Maintenance mode on') {
        window?.location?.replace('/maintenance');
      }
    });
  }

  if (size(networkError)) {
    const { statusCode } = networkError;

    if (statusCode === 403) {
      handleUnauthorizedUser().then((tokenRefreshed) => {
        if (tokenRefreshed) window.location.replace(window.location.href);
        else redirectToLoginPage();
      });
    } else {
      delayErrorMessage(statusCode);
    }
  }
});

export default errorLink;
