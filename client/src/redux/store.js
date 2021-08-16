import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {appReducer} from "./reducers/appReducer";
import {tickersReducer} from "./reducers/tickersReducer";

const reducers = combineReducers({
    app: appReducer,
    tickers: tickersReducer
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))