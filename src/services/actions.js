import {FETCH_USER,RECEIVE_ERROR,RECEIVE_POST} from "./type";
// import store from "../Pages/Home";

export const fetchUser = () => ({
    type: FETCH_USER
});

export const receivePost = results => ({
    type: RECEIVE_POST,
    payload:  results
});

export const receiveError = error => ({
    type: RECEIVE_ERROR,
    payload:  error
});


export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchUser());
        fetch(`https://randomuser.me/api?results=15`)
            .then(response => response.json())
            .then(data => {
                dispatch(receivePost(data));
            })
            .catch(error => dispatch(receiveError(error)));
    }
};

