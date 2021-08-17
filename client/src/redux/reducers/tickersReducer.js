import {SET_TICKERS_DATA} from "../actionConstants/actionConstants";

const initialState = {
    tickers: []
}

export const tickersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TICKERS_DATA:
            return {
                ...state,
                tickers: action.tickers
            }
        default:
            return state;
    }
}