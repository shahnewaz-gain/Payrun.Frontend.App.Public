'use client';

import { ApolloProvider } from '@apollo/client';
import { PostHogProvider } from 'posthog-js/react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import client from '@/lib/apollo-client';
import store from '@/redux/store';
import posthog from '@/components/Posthog-provider';

const GlobalProvider = ({ children }) => (
  <PostHogProvider client={posthog}>
    <ApolloProvider client={client}>
      <Provider store={store}>{children}</Provider>
    </ApolloProvider>
    <ToastContainer />
  </PostHogProvider>
);

export default GlobalProvider;
