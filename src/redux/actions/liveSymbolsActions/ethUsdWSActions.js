import {
    ADD_ETHUSD_WS,
    GET_ETHUSD_WS
} from '../../../constants/liveSymbols';

export const addEthUSdWS = ethusd => async dispatch => {
	
    localStorage.setItem('ethInfo', JSON.stringify(ethusd));

    dispatch({ type: ADD_ETHUSD_WS, payload: ethusd });
	
};

export const getEthUSdWS = ethusd => async dispatch => {
	
	JSON.parse(localStorage.getItem(ethusd))

    dispatch({ type: GET_ETHUSD_WS, payload: ethusd });
	
};