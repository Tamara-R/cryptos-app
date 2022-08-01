import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Meta from '../layout/Meta';
import CommonStatic from './CommonStatic';
import Button from '../layout/Button';
import { getBtcUsd } from '../../redux/actions/btcUsdActions'


const BtcUsdStatic = ({onClick}) => {

    const { isAuth }  = useSelector(state => state.auth);
    const { btcusd }  = useSelector(state => state.BtcUsd);
    const dispatch = useDispatch();
    

    useEffect(() => {
      dispatch(getBtcUsd('BTCUSD'))
    }, [dispatch])
    
    // console.log(btcusd)
    return(
        <div>
            <Meta title={"BTCUSD"} />
            <CommonStatic 
                name={btcusd.name}
                lastPrice={btcusd.lastPrice}
                high={btcusd.high}
                low={btcusd.low}
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

export default BtcUsdStatic