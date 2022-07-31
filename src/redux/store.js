import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


import { authReducer } from './reducers/authReducer';
import { 
    BtcUsdReducer ,
    EthUsdReducer,
    EthBtcReducer,
    LtcUsdReducer,
    LtcBtcReducer
} from './reducers/symbolsReducers';

import { 
    BtcUsdWSReducer, 
    EthUsdWSReducer,
    EthBtcWSReducer,
    LtcBtcWSReducer,
    LtcUsdWSReducer
} from './reducers/symbolsLiveReducers';

const reducer = combineReducers({
    auth: authReducer,
    BtcUsd: BtcUsdReducer,
    EthUsd: EthUsdReducer,
    EthBtc: EthBtcReducer,
    LtcUsd: LtcUsdReducer,
    LtcBtc: LtcBtcReducer,
    BtcUsdWS: BtcUsdWSReducer,
    EthUsdWS: EthUsdWSReducer,
    EthBtcWS: EthBtcWSReducer,
    LtcBtcWS: LtcBtcWSReducer,
    LtcUsdWS: LtcUsdWSReducer
});

let initialState = {};
  
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
  
export default store;