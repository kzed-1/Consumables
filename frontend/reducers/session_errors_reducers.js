import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_SESSION_ERRORS} from '../actions/session_actions';

const sessionsErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_SESSION_ERRORS:
            return action.errors 
        case CLEAR_SESSION_ERRORS:
            return [];
        default:
            return [];
    }
}

export default sessionsErrorsReducer;