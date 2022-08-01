import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Meta from '../layout/Meta';
import CommonStatic from './CommonStatic';
import Button from '../layout/Button';
import { getLtcUsd } from '../../redux/actions/ltcUsdActions';


const LtcUsdStatic = ({onClick}) => {
    const { isAuth }  = useSelector(state => state.auth);
    const { ltcusd }  = useSelector(state => state.LtcUsd);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getLtcUsd('LTCUSD'))
    }, [dispatch])

 
    return(
        <div>
            <Meta title={"LTCUSD"} />
            <CommonStatic 
                name={ltcusd.name}
                lastPrice={ltcusd.lastPrice}
                high={ltcusd.high}
                low={ltcusd.low}
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

export default LtcUsdStatic