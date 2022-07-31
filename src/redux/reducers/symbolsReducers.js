import { 
    ADD_BTCUSD,
    GET_BTCUSD,
    REMOVE_BTCUSD,
    ADD_ETHBTC,
    GET_ETHBTC,
    REMOVE_ETHBTC,
    ADD_ETHUSD,
    GET_ETHUSD,
    REMOVE_ETHUSD,
    ADD_LTCBTC,
    GET_LTCBTC,
    REMOVE_LTCBTC,
    ADD_LTCUSD,
    GET_LTCUSD,
    REMOVE_LTCUSD
} from "../../constants/symbols";

export const BtcUsdReducer = (state = { btcusd: {}}, action) => {

	switch (action.type) {
		case ADD_BTCUSD:
        case GET_BTCUSD:
			return {
                ...state,
                success: true,
				btcusd: action.payload
			};
		case REMOVE_BTCUSD:
			return {
                ...state,
				success: true,
				btcusd: action.payload
			};
		default:
			return state;
	}
};

export const EthUsdReducer = (state = { ethusd: {}}, action) => {
	switch (action.type) {
		case ADD_ETHUSD:
        case GET_ETHUSD:
			return {
                ...state,
                success: true,
                ethusd: action.payload
			};
		case REMOVE_ETHUSD:
			return {
                ...state,
				success: true,
				ethusd: action.payload
			};
		default:
			return state;
	}
};

export const EthBtcReducer = (state = { ethbtc: {}}, action) => {
	switch (action.type) {
		case ADD_ETHBTC:
        case GET_ETHBTC:
			return {
                ...state,
                success: true,
                ethbtc: action.payload
			};
		case REMOVE_ETHBTC:
			return {
                ...state,
				success: true,
				ethbtc: action.payload
			};
		default:
			return state;
	}
};

export const LtcUsdReducer = (state = { ltcusd: {}}, action) => {
	switch (action.type) {
		case ADD_LTCUSD:
        case GET_LTCUSD:
			return {
                ...state,
                success: true,
                ltcusd: action.payload
			};
		case REMOVE_LTCUSD:
			return {
                ...state,
				success: true,
				ltcusd: action.payload
			};
		default:
			return state;
	}
};

export const LtcBtcReducer = (state = { ltcbtc: {}}, action) => {
	switch (action.type) {
		case ADD_LTCBTC:
        case GET_LTCBTC:
			return {
                ...state,
                success: true,
                ltcbtc: action.payload
			};
		case REMOVE_LTCBTC:
			return {
                ...state,
				success: true,
				ltcbtc: action.payload
			};
		default:
			return state;
	}
};
