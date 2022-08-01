import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Meta from '../layout/Meta';
import CommonStatic from './CommonStatic';
import Button from '../layout/Button';
import { getEthUSd } from '../../redux/actions/ethUsdActions';

const EthUsdStatic = ({onClick}) => {
    
    const { isAuth }  = useSelector(state => state.auth);
    const { ethusd }  = useSelector(state => state.EthUsd);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getEthUSd('ETHUSD'))
    }, [dispatch])
    
    return(
        <div>
            <Meta title={"ETHUSD"} />
            <CommonStatic 
                name={ethusd.name}
                lastPrice={ethusd.lastPrice}
                high={ethusd.high}
                low={ethusd.low}
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

export default EthUsdStatic