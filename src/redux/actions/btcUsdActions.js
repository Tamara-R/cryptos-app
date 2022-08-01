import { 
    ADD_BTCUSD,
    GET_BTCUSD,
    REMOVE_BTCUSD
} from "../../constants/symbols";


export const addBtcUsd = btcusd => async dispatch => {
	
	
    localStorage.setItem('BTCUSD', JSON.stringify(btcusd));

    
    dispatch({ type: ADD_BTCUSD, payload: btcusd });
	
};

export const getBtcUsd = btcusd => async dispatch => {
	

    dispatch({ type: GET_BTCUSD, payload: JSON.parse(localStorage.getItem('BTCUSD')) });
	
};

export const removeBtcUsd = btcusd => async dispatch => {

	
	const updatedBtcUsd = localStorage.removeItem(btcusd);


	dispatch({ type: REMOVE_BTCUSD, payload: updatedBtcUsd });
};