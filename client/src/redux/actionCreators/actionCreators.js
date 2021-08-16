import {
    CLEAR_ERROR_AND_LOADING,
    SET_ERROR_MESSAGE,
    SET_TICKERS_DATA,
    SWITCH_LOADING_STATUS
} from "../actionConstants/actionConstants";

// app
export const switchLoadingStatus = () => ({type: SWITCH_LOADING_STATUS});
export const setErrorMessage = error => ({type: SET_ERROR_MESSAGE, error});
export const clearErrorAndLoading = () => ({type: CLEAR_ERROR_AND_LOADING});

//tickers

export const setTickersData = tickers => ({type: SET_TICKERS_DATA, tickers});

export const getTickers = (tickers, error = 'Something gone wrong') => dispatch => {
    dispatch(switchLoadingStatus());
    if(tickers){
        dispatch(clearErrorAndLoading())
        dispatch(setTickersData(tickers));
    }else {
        dispatch(setErrorMessage(error))
    }
}

