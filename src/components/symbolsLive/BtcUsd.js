import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Header from '../layout/Header';
import Meta from '../layout/Meta';
import Button from '../layout/Button';
import { addBtcUsd } from '../../redux/actions/btcUsdActions';
import { addBtcWSUsd } from '../../redux/actions/liveSymbolsActions/btcUsdWSActions'

const BtcUsd = () => {

    let [message, setMessage] = useState([]);
    let [ btc, setBtc ] = useState([]);

    const { isAuth }  = useSelector(state => state.auth);
    
    const dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        
        const ws = new WebSocket('wss://api.bitfinex.com/ws/2')

        ws.onopen = () => {
          ws.send(JSON.stringify({ event: 'conf', flags: 131072 }))
          ws.send(JSON.stringify({ event: 'subscribe', channel: 'ticker', symbol: 'tBTCUSD' }))
        }

        ws.onmessage = (msg) => {
            if(Array.isArray(JSON.parse(msg.data)[1])){
                setMessage(JSON.parse(msg.data));
            }
            const btc = {"name": "BTCUSD", "lastPrice": message[1][6], "high": message[1][8], "low": message[1][9]}
            localStorage.setItem("btcInfo", JSON.stringify(btc))
            setBtc(btc);
            dispatch(addBtcWSUsd(btc))
        }

        ws.onerror = err => {
            const timer = setTimeout(() => {
                ws.close();
                // websocket();
            }, 1000);
            return () => {
                clearTimeout(timer);
            }
        };
    }, [])

   

    const addToFavs = () => {
        // localStorage.setItem("BTCUSD", JSON.stringify("BTCUSD"))
        dispatch(addBtcUsd('BTCUSD'))
        navigate("/favorites", { replace: true });
    }

    return(
        <div>
            <Meta title={"BTCUSD"} />
            <Header />
            <table className='ui teal table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Price</th>
                        <th>High</th>
                        <th>Low</th>
                    </tr>
                </thead>
                <tbody>
                    {message.length < 1 ? (
                        <Spinner />
                    ) : (
                        
                        <tr key={1}>
                            <td key={2}>BTCUSD</td>
                            <td key={3}>{message[1][6]}</td>
                            <td key={4}>{message[1][8]}</td>
                            <td key={5}>{message[1][9]}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            {isAuth && (
                <Button onClick={addToFavs} className={"ui teal medium button"} title={"Add to Favourites"} style={{marginBottom: 5 }}/>
            )}
            
        </div>
        
    
    )
    
    
}

export default BtcUsd