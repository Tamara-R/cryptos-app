import {
    ADD_LTCBTC_WS,
    GET_LTCBTC_WS
} from '../../../constants/liveSymbols'

export const addLtcWSBtc = ltcbtc => async dispatch => {
	
    localStorage.setItem('ltcBtcInfo', JSON.stringify(ltcbtc));

    dispatch({ type: ADD_LTCBTC_WS, payload: ltcbtc });
	
};

export const getLtcWSBtc = ltcbtc => async dispatch => {
	
    JSON.parse(localStorage.getItem(ltcbtc))

    dispatch({ type: GET_LTCBTC_WS, payload: ltcbtc });
	
};