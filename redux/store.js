'use client';

import { configureStore } from '@reduxjs/toolkit';
import appReducer from '@/redux/app/appSlice';

const store = configureStore({
  reducer: {
    app: appReducer
  },
  devTools: process.env.NODE_ENV !== 'production',

  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export default store;
