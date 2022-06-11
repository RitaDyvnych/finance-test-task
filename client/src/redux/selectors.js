import { createSelector } from '@reduxjs/toolkit';

export const getData = state => state.tickers;

// export const getDataTickers = createSelector(
//     [getData]
// );