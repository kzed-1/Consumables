import { RECEIVE_RECIPE} from '../actions/recipes_actions';
import { RECEIVE_STEP, REMOVE_STEP, CLEAR_STEPS } from '../actions/steps_action';

export default (oldstate = {}, action) => {
    Object.freeze(oldstate)
    switch (action.type) {
        case RECEIVE_RECIPE:
            let steps = action.payload.steps;
            debugger
            return Object.assign({}, oldstate, steps)

        case RECEIVE_STEP:
            debugger
            return Object.assign({}, oldstate, {[action.step.id]: action.step})
        case REMOVE_STEP:
            let newState = Object.assign({}, oldstate);
            delete newState[action.step.id]
            return newState;
        case CLEAR_STEPS:
            return {};
        default:
            return oldstate;
    }
}