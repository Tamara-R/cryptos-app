import React, { useEffect } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from "./redux/actions/authActions";

import Home from "./components/Home";
import BtcUsd from "./components/symbolsLive/BtcUsd";
import EthUsd from "./components/symbolsLive/EthUsd";
import LtcUsd from "./components/symbolsLive/LtcUsd";
import LtcBtc from "./components/symbolsLive/LtcBtc";
import EthBtc from "./components/symbolsLive/EthBtc";
import Favourites from "./components/Favourites";

import "./App.css";


function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(setUser());
    

  }, [dispatch]);

  return (
    <div className="ui container" style={{marginTop: 20}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/BTCUSD" element={<BtcUsd />}/>
          <Route path="/ETHUSD" element={<EthUsd />}/>
          <Route path="/LTCUSD" element={<LtcUsd />}/>
          <Route path="/LTCBTC" element={<LtcBtc />}/>
          <Route path="/ETHBTC" element={<EthBtc />}/>
          <Route path="/favorites" element={<Favourites />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
