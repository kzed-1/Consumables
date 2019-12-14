import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
// import { RECEIVE_RECIPE } from '../actions/recipes_actions';


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        // case RECEIVE_RECIPE:
        //     return Object.assign({}, state, { [action.payload.user.id]: action.payload.user});
        default:
            return state;
    }
};

export default usersReducer;