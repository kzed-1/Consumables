import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER,} from '../actions/session_actions';

const sessionsErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_SESSION_ERRORS:
            return action.errors 
        default:
            return oldState;
    }
}

export default sessionsErrorsReducer;