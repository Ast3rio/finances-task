import {CLEAR_ERROR_AND_LOADING, SET_ERROR_MESSAGE, SWITCH_LOADING_STATUS} from "../actionConstants/actionConstants";

const initialState = {
    loading: false,
    error: null
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_LOADING_STATUS:
            return {
                ...state,
                loading: true,
                error: null
            }
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case CLEAR_ERROR_AND_LOADING:
            return {
                ...state,
                loading: false,
                error: null
            }
        default:
            return state;
    }
}