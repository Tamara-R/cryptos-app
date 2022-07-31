import {
    ADD_ETHBTC_WS,
    GET_ETHBTC_WS,
} from "../../../constants/liveSymbols";

export const addEthUSdWS = ethusd => async dispatch => {
	
    localStorage.setItem('ethBtcInfo', JSON.stringify(ethusd));

    dispatch({ type: ADD_ETHBTC_WS, payload: ethusd });
	
};

export const getEthUSdWS = ethusd => async dispatch => {
	
	JSON.parse(localStorage.getItem(ethusd))

    dispatch({ type: GET_ETHBTC_WS, payload: ethusd });
	
};