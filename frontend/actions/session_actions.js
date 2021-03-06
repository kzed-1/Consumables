import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";


export const recieveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
}); 


export const receiveSessionErrors = (errors) =>({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearSessionErrors = () =>({
    type: CLEAR_SESSION_ERRORS
});


export const signup = (formUser) => (dispatch) => (
    APIUtil.createUser(formUser)
        .then(user => dispatch(recieveCurrentUser(user)),
        error => (dispatch(receiveSessionErrors(error.responseJSON))))
);

export const login = (formUser) => (dispatch) => (
    APIUtil.login(formUser)
        .then(user => dispatch(recieveCurrentUser(user)),
        error => (dispatch(receiveSessionErrors(error.responseJSON))))
);

export const logout = () => (dispatch) => (
    APIUtil.logout()
        .then(() => (dispatch(logoutCurrentUser())),
        error => (dispatch(receiveSessionErrors(error.responseJSON))))
);

export const clearErrors = () => (dispatch) => (
    dispatch(clearSessionErrors())
);