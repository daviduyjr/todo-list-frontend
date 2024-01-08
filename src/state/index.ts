import { configureStore } from '@reduxjs/toolkit';
import container from '../container';
import Types from '../types';
import sessionSlice from './session';

container.bind(Types.LocalStorage).toConstantValue(localStorage);

const store = configureStore({
    reducer: {
      session: sessionSlice.reducer,
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>
  
  export default store;