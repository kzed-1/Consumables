import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'

const _nullUser = {
    currentUserId: null
}

const sessionReducer = (oldstate= _nullUser, action) => {
    Object.freeze(oldstate)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {currentUserId: action.currentUser.id};
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return oldstate;
    }
}

export default sessionReducer;