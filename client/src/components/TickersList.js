import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getTickerData } from '../redux/operations';
import s from './tickersLst.module.css';

export default function TickersList() {
  const dispatch = useDispatch();
  const tickers = useSelector(state => state.tickers);
  let tickersFirst = [];
  let tickersNext = [];


  useEffect(() => {
    dispatch(getTickerData());
  }, [dispatch]);

  tickersFirst = tickers.slice(0,-6);
  tickersNext = tickers.slice(-6);

  return (

    <div className={s.wrap}>
      <div className={`${s.ticker} ${s.head}`}>
       {tickers.slice(-6).map((el) => (
          <div className={`${s.item}`} key={el.id}>
            {el.ticker}
          </div>
        ))}
      </div>
      <div className={s.data}>
      {tickersFirst.map((el) => (
          <div className={s.item} key={el.id}>
            {el.price} 
          </div>
        ))}
      {tickersNext.map((el) => (
          <div className={`${s.item}`} key={el.id}>{el.price} </div>
        ))}
      </div>
    </div>
  );
}