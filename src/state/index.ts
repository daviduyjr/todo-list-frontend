import { configureStore } from '@reduxjs/toolkit';
import container from '../container';
import Types from '../types';

container.bind(Types.LocalStorage).toConstantValue(localStorage);

const store = configureStore({
    reducer: {},
  });
  
  export type RootState = ReturnType<typeof store.getState>
  
  export default store;