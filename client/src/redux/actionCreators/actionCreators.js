import {CLEAR_ERROR_AND_LOADING, SET_ERROR_MESSAGE, SWITCH_LOADING_STATUS} from "../actionConstants/actionConstants";

export const switchLoadingStatus = () => ({type: SWITCH_LOADING_STATUS});
export const setErrorMessage = error => ({type: SET_ERROR_MESSAGE, error});
export const clearErrorAndLoading = () => ({type: CLEAR_ERROR_AND_LOADING});
