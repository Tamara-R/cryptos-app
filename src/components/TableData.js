import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Spinner from './layout/Spinner';


const TableData = ({symbol, id}) => {

    const [message, setMessage] = useState([]);
    const [params, setParams] = useState(JSON.stringify({
        event: 'subscribe',
        channel: 'ticker',
        symbol: `t${symbol}`
    }))
   
    useEffect(() => {
        websocket();
    }, [])

    const websocket = () => {
        const ws = new WebSocket('wss://api.bitfinex.com/ws/2')

        ws.onopen = () => {
        //   ws.send(JSON.stringify({ event: 'conf', flags: 131072 }))
        //   ws.send(JSON.stringify({ event: 'subscribe', channel: 'ticker', symbol: `t${symbol}` }))
            ws.send(params);
        }

        ws.onmessage = (msg) => {
            if(Array.isArray(JSON.parse(msg.data)[1])){
                setMessage(JSON.parse(msg.data));
            }
        }

        // console.log(message)
    
    
        ws.onerror = err => {
            const timer = setTimeout(() => {
                ws.close();
                websocket();
            }, 1000);
            return () => {
                clearTimeout(timer);
            }
        };
    }

    return(
        <>
            {message.length > 0 ? (
                <tr key={id}>
                    <td><Link to={symbol} style={{color: "#3fb9b9"}}>{symbol}</Link></td>
                    <td>{message[1][6]}</td>
                    <td>{message[1][4]}</td>
                    <td>{message[1][5]} %</td>
                    <td>{message[1][8]}</td>
                    <td>{message[1][9]}</td>
                </tr>
            ) : (
                <Spinner />
            )}
        </>
            
    )
    
    
}

export default TableData