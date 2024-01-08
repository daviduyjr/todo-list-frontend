import { createAsyncThunk } from '@reduxjs/toolkit';
import container from '../../container';
import Types from '../../types';
import type { ISessionDataSource } from 'src/interfaces/data-sources';

export default createAsyncThunk('session/get', () => {
  const sessionLocal: ISessionDataSource = container.get(Types.SessionDataSource);
  return sessionLocal.get();
});
