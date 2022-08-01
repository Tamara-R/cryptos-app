import React, { } from 'react';
import Spinner from '../layout/Spinner';

const CommonStatic = ({name, lastPrice, high, low}) => {

    
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
                    {null ? (
                        <Spinner />
                    ) : (
                        
                        <tr key={1}>
                            <td key={2}>{name}</td>
                            <td key={3}>{lastPrice}</td>
                            <td key={4}>{high}</td>
                            <td key={5}>{low}</td>
                        </tr>
                    
                    )}
                </tbody>
            </table>
        </div>
        
    
    )
    
    
}

export default CommonStatic