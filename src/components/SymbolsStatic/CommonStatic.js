import React, { useState, useEffect } from 'react';
import Spinner from '../layout/Spinner';

const CommonStatic = ({value}) => {

    let [ data, setData ] = useState();

    useEffect(() => {
        setData(items)
    }, [])
    
    let items = JSON.parse(localStorage.getItem(value));

    return(
        <div>
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
                    {!items ? (
                        <Spinner />
                    ) : (
                        
                        <tr key={1}>
                            <td key={2}>{items.name}</td>
                            <td key={3}>{items.lastPrice}</td>
                            <td key={4}>{items.high}</td>
                            <td key={5}>{items.low}</td>
                        </tr>
                    
                    )}
                </tbody>
            </table>
        </div>
        
    
    )
    
    
}

export default CommonStatic