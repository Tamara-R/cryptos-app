import { 
    ADD_LTCUSD,
    GET_LTCUSD,
    REMOVE_LTCUSD
} from "../../constants/symbols";

export const addLtcUsd = ltcusd => async dispatch => {
	
	
    localStorage.setItem('LTCUSD', JSON.stringify(ltcusd));

    
    dispatch({ type: ADD_LTCUSD, payload: ltcusd });
	
};

export const getLtcUsd = ltcusd => async dispatch => {
	
    dispatch({ type: GET_LTCUSD, payload: JSON.parse(localStorage.getItem(ltcusd)) });
	
};

export const removeLtcUsd = ltcusd => async dispatch => {


	const updatedLtcUsd = localStorage.removeItem(ltcusd);

	dispatch({ type: REMOVE_LTCUSD, payload: updatedLtcUsd });
};