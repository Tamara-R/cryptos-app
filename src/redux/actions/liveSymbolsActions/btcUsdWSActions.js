import {
    ADD_BTCUSD_WS,
    GET_BTCUSD_WS
} from '../../../constants/liveSymbols'


export const addBtcWSUsd = btcusd => async dispatch => {
	
    localStorage.setItem('btcInfo', JSON.stringify(btcusd));

    dispatch({ type: ADD_BTCUSD_WS, payload: btcusd });
	
};

export const getBtcWSUsd = btcusd => async dispatch => {
	
    JSON.parse(localStorage.getItem(btcusd))

    dispatch({ type: GET_BTCUSD_WS, payload: btcusd });
	
};