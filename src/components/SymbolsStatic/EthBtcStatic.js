import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Meta from '../layout/Meta';
import CommonStatic from './CommonStatic';
import Button from '../layout/Button';
import { getEthBtc } from '../../redux/actions/ethBtcActions';

const EthBtcStatic = ({onClick}) => {
    
    const { isAuth }  = useSelector(state => state.auth);
    const { ethbtc }  = useSelector(state => state.EthBtc);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getEthBtc('ETHBTC'))
    }, [dispatch])
    

    
    return(
        <div>
            <Meta title={"ETHBTC"} />
            <CommonStatic 
                name={ethbtc.name}
                lastPrice={ethbtc.lastPrice}
                high={ethbtc.high}
                low={ethbtc.low}
            />
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