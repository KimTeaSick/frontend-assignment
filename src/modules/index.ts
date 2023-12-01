import {storeInterface} from './index.d';
import {configureStore} from '@reduxjs/toolkit';
import weekReducer from './week/index';

export const store = configureStore<storeInterface>({
  reducer: {
    week: weekReducer,
  },
});
