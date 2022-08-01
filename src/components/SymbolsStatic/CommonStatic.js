import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import Spinner from '../layout/Spinner';

const CommonStatic = ({name, lastPrice, high, low}) => {

    let navigate = useNavigate();

    const onNavigate = () => {
        navigate(`/${name}`);
    }
    
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
                            <td key={2}><button className='buttonLink' onClick={onNavigate}>{name}</button></td>
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