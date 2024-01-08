import { createSlice } from '@reduxjs/toolkit';
import { Action } from 'history';
import createSessionThunk from '../session/create';

export default createSlice({
  name: 'sessionError',
  initialState: null,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(createSessionThunk.rejected, (state, action) => action.error);
    builder.addCase(createSessionThunk.fulfilled, () => null);
  },
});
