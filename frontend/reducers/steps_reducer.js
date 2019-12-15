import { RECEIVE_RECIPE} from '../actions/recipes_actions';


export default (oldstate = {}, action) => {
    Object.freeze(oldstate)
    switch (action.type) {
        case RECEIVE_RECIPE:
            let steps = action.payload.steps;
            return Object.assign({}, oldstate, steps)
        default:
            return oldstate;
    }
}