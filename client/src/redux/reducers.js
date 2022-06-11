import { createSlice } from '@reduxjs/toolkit';
import {getThunkData} from './operations';

const tickersData = createSlice({
  name: 'tickers',
  initialState: {
    ticker: "",
    exchange: "",
    price: 0,
    change: 0,
    change_percent: 0,
    dividend: 0,
    yield: 0,
    last_trade_time: ""
  },
  extraReducers: {
    [getThunkData.pending]: (state, action) => ({
        ...state,
    }),
    [getThunkData.fulfilled]: (state, action) => ({
        ...state,
        tickers: action.payload,
    }),
    [getThunkData.rejected]: (state, action) => ({
        ...state,
        error: action.payload,
    })}
});


export default tickersData.reducer;