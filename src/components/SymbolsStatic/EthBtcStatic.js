import React from 'react';
import { useSelector } from 'react-redux';
import Meta from '../layout/Meta';
import CommonStatic from './CommonStatic';
import Button from '../layout/Button';

const EthBtcStatic = ({onClick}) => {
    
    const { isAuth }  = useSelector(state => state.auth);

    
    return(
        <div>
            <Meta title={"ETHBTC"} />
            <CommonStatic value={'ETHBTC'} />
            {isAuth && (
                <Button 
                    onClick={onClick} 
                    className={"ui red medium button"} 
                    title={"Remove from Favourites"} 
                    style={{marginTop: 5, marginBottom:5 }}
                />
            )}
        </div>
    
    )
    
    
}

export default EthBtcStatic