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

const reducer = combineReducers({
    auth: authReducer,
    BtcUsd: BtcUsdReducer,
    EthUsd: EthUsdReducer,
    EthBtc: EthBtcReducer,
    LtcUsd: LtcUsdReducer,
    LtcBtc: LtcBtcReducer
});

let initialState = {};
  
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
  
export default store;