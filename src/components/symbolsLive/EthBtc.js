import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Header from '../layout/Header';
import Meta from '../layout/Meta';
import Button from '../layout/Button';
import { addEthBtc } from '../../redux/actions/ethBtcActions';
import { addEthUSdWS } from '../../redux/actions/liveSymbolsActions/ethBtcWSActions'


const EthBtc= () => {

    let [message, setMessage] = useState([]);
    // let [ ethBTC, setethBTC ] = useState([]);
    const { isAuth }  = useSelector(state => state.auth);

    const dispatch = useDispatch();
    let navigate = useNavigate();
   
    useEffect(() => {
        const ws = new WebSocket('wss://api.bitfinex.com/ws/2')

        ws.onopen = () => {
          ws.send(JSON.stringify({ event: 'conf', flags: 131072 }))
          ws.send(JSON.stringify({ event: 'subscribe', channel: 'ticker', symbol: 'tETHBTC' }))
        }

        ws.onmessage = (msg) => {
            if(Array.isArray(JSON.parse(msg.data)[1])){
                setMessage(JSON.parse(msg.data));
            }

            const ethbtc = {"name": "ETHBTC", "lastPrice": message[1][6], "high": message[1][8], "low": message[1][9]}
            // localStorage.setItem("ethBtcInfo", JSON.stringify(ethbtc))
            // setethBTC(ethbtc);
            dispatch(addEthBtc(ethbtc));
            // dispatch(addEthUSdWS(ethbtc))
        }

        ws.onerror = err => {
            const timer = setTimeout(() => {
                ws.close();
            }, 1000);
            return () => {
                clearTimeout(timer);
            }
        };
        

    }, [])

    
    const addToFavs = () => {
        dispatch(addEthBtc('ETHBTC'))
        navigate("/favorites", { replace: true });
    }
    
    return(
        <>
            <Meta title={"ETHBTC"} />
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
                    {message.length > 0 ? (
                        <tr>
                            <td>ETHBTC</td>
                            <td>{message[1][6]}</td>
                            <td>{message[1][8]}</td>
                            <td>{message[1][9]}</td>
                        </tr>
                    ) : (
                        <Spinner />
                    )}
                </tbody>
            </table>
            {isAuth && (
                <Button onClick={addToFavs} className={"ui teal medium button"} title={"Add to Favourites"} style={{marginBottom: 5 }}/>
            )}
        </>
        
    
    )
    
    
}

export default EthBtc