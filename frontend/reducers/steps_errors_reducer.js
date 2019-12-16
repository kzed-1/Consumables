import { RECEIVE_STEP_ERRORS, CLEAR_STEP_ERRORS, RECEIVE_STEP } from '../actions/steps_action';

const stepsErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_STEP:
            return [];
        case CLEAR_STEP_ERRORS:
            return [];
        case RECEIVE_STEP_ERRORS:
            return action.errors;
        default:
            return [];
    }
}

export default stepsErrorsReducer;