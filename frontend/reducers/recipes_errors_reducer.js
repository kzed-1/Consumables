import { RECEIVE_RECIPE, RECEIVE_RECIPE_ERRORS, CLEAR_RECIPE_ERRORS } from '../actions/recipes_actions';

const recipesErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_RECIPE:
            return [];
        case RECEIVE_RECIPE_ERRORS:
            return action.errors
        case CLEAR_RECIPE_ERRORS:
            return [];
        default:
            return [];
    }
}

export default recipesErrorsReducer;