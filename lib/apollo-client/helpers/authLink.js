import { setContext } from '@apollo/client/link/context';
import { getIdToken, getAccessToken, getRefreshToken } from '@/utils';

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    Authorization: getIdToken(),
    accessToken: getAccessToken(),
    refreshToken: getRefreshToken()
  }
}));

export default authLink;
