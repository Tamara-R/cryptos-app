import { 
    ADD_ETHBTC,
    GET_ETHBTC,
    REMOVE_ETHBTC
} from "../../constants/symbols";



export const addEthBtc = ethbtc => async dispatch => {
	
	
    localStorage.setItem('ETHBTC', JSON.stringify(ethbtc));

    
    dispatch({ type: ADD_ETHBTC, payload: ethbtc });
	
};

export const getEthBtc = ethbtc => async dispatch => {
	

    dispatch({ type: GET_ETHBTC, payload: JSON.parse(localStorage.getItem(ethbtc)) });
	
};

export const removeEthBtc = ethbtc => async dispatch => {

	
	const updatedEthBtc = localStorage.removeItem(ethbtc);

	dispatch({ type: REMOVE_ETHBTC, payload: updatedEthBtc });
};