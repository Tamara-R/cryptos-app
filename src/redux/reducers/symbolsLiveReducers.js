import { 
    ADD_BTCUSD_WS,
    GET_BTCUSD_WS,
    ADD_ETHBTC_WS,
    GET_ETHBTC_WS,
    ADD_ETHUSD_WS,
    GET_ETHUSD_WS,
    ADD_LTCBTC_WS,
    GET_LTCBTC_WS,
    ADD_LTCUSD_WS,
    GET_LTCUSD_WS,
} from "../../constants/liveSymbols";

export const BtcUsdWSReducer = (state = { btcusd: {}}, action) => {

	switch (action.type) {
		case ADD_BTCUSD_WS:
        case GET_BTCUSD_WS:
			return {
                ...state,
                success: true,
				btcusd: action.payload
			};
		default:
			return state;
	}
};

export const EthUsdWSReducer = (state = { ethusd: {}}, action) => {
	switch (action.type) {
		case ADD_ETHUSD_WS:
        case GET_ETHUSD_WS:
			return {
                ...state,
                success: true,
                ethusd: action.payload
			};
		default:
			return state;
	}
};

export const EthBtcWSReducer = (state = { ethbtc: {}}, action) => {
	switch (action.type) {
		case ADD_ETHBTC_WS:
        case GET_ETHBTC_WS:
			return {
                ...state,
                success: true,
                ethbtc: action.payload
			};
		default:
			return state;
	}
};

export const LtcUsdWSReducer = (state = { ltcusd: {}}, action) => {
	switch (action.type) {
		case ADD_LTCUSD_WS:
        case GET_LTCUSD_WS:
			return {
                ...state,
                success: true,
                ltcusd: action.payload
			};
		default:
			return state;
	}
};

export const LtcBtcWSReducer = (state = { ltcbtc: {}}, action) => {
	switch (action.type) {
		case ADD_LTCBTC_WS:
        case GET_LTCBTC_WS:
			return {
                ...state,
                success: true,
                ltcbtc: action.payload
			};
		default:
			return state;
	}
};
