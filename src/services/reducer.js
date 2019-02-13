import {
    FETCH_USER,
    RECEIVE_POST,
    RECEIVE_ERROR
} from './type';

const initialState = {
    items: [],
    loading: false,
    error: null
};

export default function resultReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_USER:
            return {
                ...state,
                loading: true,
                error: null
            };
        
        case RECEIVE_POST:
            return {
                ...state,
                loading: false,
                items: action.payload.results
            };
        
        case RECEIVE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };
        
        default:
            return state;
    }
}
