import { createSlice } from '@reduxjs/toolkit';
import { Action } from 'history';
import createSessionThunk from './create';
import getSessionThunk from './get';
import deleteSessionThunk from './delete';

export default createSlice({
  name: 'session',
  initialState: null,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(createSessionThunk.fulfilled, (state, action) => action.payload);
    builder.addCase(getSessionThunk.fulfilled, (state, action) => action.payload);
    builder.addCase(deleteSessionThunk.fulfilled, () => null);
  },
});
