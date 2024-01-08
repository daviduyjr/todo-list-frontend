import React from 'react';
import { IParentStateContext } from './interface';

export default React.createContext<IParentStateContext>({
  get: () => null,
  set: () => {},
});
