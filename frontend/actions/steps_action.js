import * as StepsAPiUtil from '../util/step_util';

export const RECEIVE_STEP = "RECEIVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";
export const RECEIVE_STEP_ERRORS = "RECEIVE_STEP_ERRORS";
export const CLEAR_STEP_ERRORS = "CLEAR_STEP_ERRORS";
export const CLEAR_STEPS = "CLEAR_STEPS";

export const receiveStep = (step) => ({
    type: RECEIVE_STEP,
    step
});


export const removeStep = (step) => ({
    type: REMOVE_STEP,
    step,
});

export const receiveStepErrors = (errors) => ({
    type: RECEIVE_STEP_ERRORS,
    errors
});

export const clearStepErrors = () => ({
    type: CLEAR_STEP_ERRORS
})

export const clearSteps = () => ({
    type: CLEAR_STEPS
})

export const grabStep = (stepId) => (dispatch) => (
    StepsAPiUtil.grabStep(stepId)
        .then(step => dispatch(receiveStep(step)))
);

export const createStep = (step) => (dispatch) => (
    StepsAPiUtil.createStep(step)
        .then(step => dispatch(receiveStep(step)), 
            error => dispatch(receiveStepErrors(error.responseJSON)))
);

export const editStep = (step) => (dispatch) => (
    StepsAPiUtil.editStep(step)
        .then(step => dispatch(receiveStep(step)),
            error => dispatch(receiveStepErrors(error.responseJSON)))
);

export const deleteStep = (stepId) => (dispatch) => {
    return StepsAPiUtil.deleteStep(stepId)
        .then(step => dispatch(removeStep(step)),
            error => dispatch(receiveStepErrors(error.responseJSON)))
};

export const clearErrors = () => (dispatch) => (
    dispatch(clearStepErrors())
);
