import { createReducer } from '@reduxjs/toolkit';
import { getTickersData } from './actions';
let array=[];

export const tickersData = createReducer([],{
    [getTickersData]: (state, {payload}) => {
        if(state.length<12) {
            return [...state, ...payload];
        }
        else {
            array = [...state, ...payload].slice(-12);
            return array;
        }
    },
    // [deletTickers]: (state, {payload}) => {
    //     return state.tickers.filter(({id}) => id !== payload);
    // },
});
