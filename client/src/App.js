import './App.css';
import Header from './components/Header';
import TickersList from './components/TickersList';
import { useState, useEffect } from 'react';
import {getThunkData} from './redux/operations';

function App() {

  // getThunkData();


  return (
    <div className="App">
      Hello!
      {/* <Header/> */}
      <TickersList/>
    </div>
  );
}

export default App;
