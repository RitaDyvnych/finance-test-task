import io from 'socket.io-client';
import { getTickersData } from './actions';

export function getTickerData() {
  return async dispatch => {
    const socket = io('http://localhost:4000');
    socket.on('connect', () => {
      console.log('connected');
      socket.emit('start');
    });
    
    socket.on('ticker', (tickerData) => {
        const res = Array.isArray(tickerData) ? tickerData : [tickerData];
        dispatch(getTickersData(res));
      });
  }
}
