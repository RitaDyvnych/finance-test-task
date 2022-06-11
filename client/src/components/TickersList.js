import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getThunkData } from '../redux/operations';
// import { getDataTickers } from '../redux/selectors';

export default function TickersList() {
  const dispatch = useDispatch();
  // const data = useSelector(getDataTickers);

  useEffect(() => {
    dispatch(getThunkData());
  }, [dispatch]);

  getThunkData();

  return (
    <div>Work</div>
  );
}