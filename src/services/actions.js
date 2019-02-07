export const FETCH_DATAS_BEGIN   = 'FETCH_DATAS_BEGIN';
export const FETCH_DATAS_SUCCESS = 'FETCH_DATAS_SUCCESS';
export const FETCH_DATAS_FAILURE = 'FETCH_DATAS_FAILURE';

export const fetchDatasBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN
});

export const fetchDatasSuccess = results => ({
    type: FETCH_DATAS_SUCCESS,
    payload: { results }
});

export const fetchDatasFailure = error => ({
    type: FETCH_DATAS_FAILURE,
    payload: { error }
});
