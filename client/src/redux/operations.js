import io from 'socket.io-client';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTickersData } from './actions';


// export function getThunkData() {
//   return dispatch => {
//     const socket = io('http://localhost:4000');
//     socket.on('connect', () => {
//       console.log('connected');
//       socket.emit('start');
//     });
//     socket.on('ticker', (tickerData) => {
//         const res = Array.isArray(tickerData) ? tickerData : [tickerData];
//         dispatch(getTickersData(res));
//       });
//   }
// }
const socket = io('http://localhost:4000');
export const getThunkData = createAsyncThunk('getData',
  async (_, { rejectWithValue }) => {
    try {
      socket.on('connect', () => {
        console.log('connected');
        socket.emit('start');
      });
      socket.on('ticker', (tickerData) => {
        const res = Array.isArray(tickerData) ? tickerData : [tickerData];
        // dispatch(getTickersData(res));
        console.log(res);
        return res;
      });
      // return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);