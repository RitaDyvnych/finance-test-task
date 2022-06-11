import { createAction } from '@reduxjs/toolkit'

export const getTickersData = createAction('tickers/data');
export const addTickers = createAction('tickers/addNewTicker');
export const deleteTickers = createAction('tickers/deleteTicker');
