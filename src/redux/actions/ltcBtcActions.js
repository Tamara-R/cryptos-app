import { 
    ADD_LTCBTC,
    GET_LTCBTC,
    REMOVE_LTCBTC
} from "../../constants/symbols";

export const addLtcBtc = ltcbtc => async dispatch => {
	
	
    localStorage.setItem('LTCBTC', JSON.stringify(ltcbtc));

    
    dispatch({ type: ADD_LTCBTC, payload: ltcbtc });
	
};

export const getLtcBtc = ltcbtc => async dispatch => {
	
    JSON.parse(localStorage.getItem(ltcbtc))

    dispatch({ type: GET_LTCBTC, payload: ltcbtc });
	
};

export const removeLtcBtc = ltcbtc => async dispatch => {

	const updatedLtcBtc = localStorage.removeItem(ltcbtc);

	// localStorage.setItem('LTCBTC', JSON.stringify(updatedLtcBtc));

	dispatch({ type: REMOVE_LTCBTC, payload: updatedLtcBtc });
};