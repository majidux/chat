export function fetchData() {
    return dispatch => {
        dispatch(fetchDatasBegin());
        return fetch("/results")
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchDatasSuccess(json.results));
                return json.results;
            })
            .catch(error => dispatch(fetchDatasFailure(error)));
    };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
