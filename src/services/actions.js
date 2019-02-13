import {FETCH_USER,RECEIVE_ERROR,RECEIVE_POST} from "./type";
import store from "../Pages/Home";

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


// export const thunk_action_creator = username => {
//     const user = username.replace(/\s/g,"");
//     store.dispatch(fetchUser());
//     return function (dispatch,getState) {
//         return fetch(`https://randomuser.me/api/`)
//             .then(data => data.json())
//             .then(data => {
//                 dispatch(receivePost(data));
//             })
//             .catch(error=>dispatch(receiveError()));
//     }
// };


export const fetchData = () => {
    return (dispatch,getState) => {
        console.warn('hello');
        dispatch(fetchUser());
        fetch(`https://randomuser.me/api?results=15`)
            .then(response => response.json())
            .then(data => {
                dispatch(receivePost(data));
                console.warn(data)
            })
            .catch(error => dispatch(receiveError(error)));
    }
};
