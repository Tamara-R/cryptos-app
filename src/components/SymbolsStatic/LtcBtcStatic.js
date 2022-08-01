import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Meta from '../layout/Meta';
import CommonStatic from './CommonStatic';
import Button from '../layout/Button';
import { getLtcBtc } from '../../redux/actions/ltcBtcActions';


const LtcBtcStatic = ({onClick}) => {

    const { isAuth }  = useSelector(state => state.auth);
    const { ltcbtc }  = useSelector(state => state.LtcBtc);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getLtcBtc('LTCBTC'))
    }, [dispatch])
    
 
    return(
        <div>
            <Meta title={"LTCBTC"} />
            <CommonStatic 
                name={ltcbtc.name}
                lastPrice={ltcbtc.lastPrice}
                high={ltcbtc.high}
                low={ltcbtc.low}
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

export default LtcBtcStatic