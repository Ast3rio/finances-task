import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {appReducer} from "./reducers/appReducer";

const reducers = combineReducers({
    app: appReducer
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))