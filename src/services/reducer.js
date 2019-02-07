import {
    FETCH_DATAS_BEGIN,
    FETCH_DATAS_SUCCESS,
    FETCH_DATAS_FAILURE
} from './actions';

const initialState = {
    items: [],
    loading: false,
    error: null
};

export default function resultReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_DATAS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        
        case FETCH_DATAS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.results
            };
        
        case FETCH_DATAS_FAILURE:
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
