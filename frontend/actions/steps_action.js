import * as StepsAPiUtil from '../util/step_util';

export const RECEIVE_STEP = "RECEIVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";
export const RECEIVE_STEP_ERRORS = "RECEIVE_STEP_ERRORS";
export const CLEAR_STEP_ERRORS = "CLEAR_STEP_ERRORS";

export const receiveStep = (step) => ({
    type: RECEIVE_STEP,
    step
});


export const removeStep = (stepId) => ({
    type: REMOVE_STEP,
    stepId
});

export const receiveStepErrors = (errors) => ({
    type: RECEIVE_STEP_ERRORS,
    errors
});

export const clearStepErrors = () => ({
    type: CLEAR_STEP_ERRORS
})

export const grabStep = (recipeId, stepId) => (dispatch) => (
    StepsAPiUtil.grabStep(recipeId, stepId)
        .then(step => dispatch(receiveStep(step)))
);

export const createStep = (recipeId, step) => (dispatch) => (
    StepsAPiUtil.createStep(recipeId, step)
        .then(step => dispatch(receiveStep(step)), 
            error => dispatch(receiveStepErrors(error.responseJSON)))
);

export const editStep = (recipeId, step) => (dispatch) => (
    StepsAPiUtil.editStep(recipeId, step)
        .then(step => dispatch(receiveStep(step)),
            error => dispatch(receiveStepErrors(error.responseJSON)))
);

export const deleteStep = (recipeId, stepId) => (dispatch) => {
    return StepsAPiUtil.deleteStep(recipeId, stepId)
        .then(step => dispatch(removeStep(step.id)),
            error => dispatch(receiveStepErrors(error.responseJSON)))
};

export const clearErrors = () => (dispatch) => (
    dispatch(clearStepErrors())
);
