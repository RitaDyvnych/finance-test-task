import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getTickerData } from '../redux/operations';
import s from './tickersLst.module.css';

export default function TickersList() {
  const dispatch = useDispatch();
  const tickers = useSelector(state => state.tickers);


  useEffect(() => {
    dispatch(getTickerData());
  }, [dispatch]);

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
      {tickers.map((el) => (
          <div className={s.item} key={el.id}>{el.price} </div>
        ))}
      </div>

    </div>
  );
}