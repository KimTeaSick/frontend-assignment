import {RootInitialType} from './index.d';
import {configureStore} from '@reduxjs/toolkit';
import weekReducer from './week/index';

export const store = configureStore<RootInitialType>({
  reducer: {
    week: weekReducer,
  },
});
