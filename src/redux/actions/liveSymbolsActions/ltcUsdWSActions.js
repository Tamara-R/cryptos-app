import {
    ADD_LTCUSD_WS,
    GET_LTCUSD_WS
} from "../../../constants/liveSymbols"

export const addLtcWSUsd = ltcusd => async dispatch => {
	
    localStorage.setItem('ltcInfo', JSON.stringify(ltcusd));

    dispatch({ type: ADD_LTCUSD_WS, payload: ltcusd });
	
};

export const getLtcWSUsd = ltcusd => async dispatch => {
	
    JSON.parse(localStorage.getItem(ltcusd))

    dispatch({ type: GET_LTCUSD_WS, payload: ltcusd });
	
};