import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import tickersData from './reducers';

const store = configureStore({
  reducer: {
    // tickers: tickersData,
    tickers: (state = [])=>state,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;