import { 
    ADD_ETHUSD,
    GET_ETHUSD,
    REMOVE_ETHUSD,
} from "../../constants/symbols";


export const addEthUSd = ethusd => async dispatch => {
	
	
    localStorage.setItem('ETHUSD', JSON.stringify(ethusd));

    dispatch({ type: ADD_ETHUSD, payload: ethusd });
	
};

export const getEthUSd = ethusd => async dispatch => {
	
	JSON.parse(localStorage.getItem(ethusd))

    dispatch({ type: GET_ETHUSD, payload: ethusd });
	
};

export const removeEthUSD = ethusd => async dispatch => {

	
	const updatedEthUsd = localStorage.removeItem(ethusd);
	// const updatedEthUsd = ethusd.filter(e => e !== ethusd);

	// localStorage.setItem('ETHUSD', JSON.stringify(updatedEthUsd));

	dispatch({ type: REMOVE_ETHUSD, payload: updatedEthUsd });
};