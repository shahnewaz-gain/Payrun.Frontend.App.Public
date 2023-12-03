'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalProps: {}
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addModalProps: (state, action) => ({ ...state, modalProps: action.payload })
  }
});

export const { addModalProps } = appSlice.actions;
export default appSlice.reducer;
