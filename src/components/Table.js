import React, { Suspense } from 'react';
import Spinner from './layout/Spinner';
import TableData from './TableData';


const Table = () => {

    const symbols = [
        {id: 1, symbol: "BTCUSD"},
        {id: 2, symbol: "ETHUSD"},
        {id: 3, symbol: "LTCUSD"},
        {id: 4, symbol: "LTCBTC",},
        {id: 5, symbol: "ETHBTC"},

    ]

    return(
        <Suspense fallback={<Spinner/>}>
            <table className='ui teal table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last</th>
                        <th>Change</th>
                        <th>Change Percent</th>
                        <th>High</th>
                        <th>Low</th>
                    </tr>
                </thead>
                <tbody>
                    {symbols.map(s => (
                        <TableData symbol={s.symbol} id={s.id} />
                    ))}
                </tbody>
            </table>
        </Suspense>
            
    )
    
    
}

export default Table