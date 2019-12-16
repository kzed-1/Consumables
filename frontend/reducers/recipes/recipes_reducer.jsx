import { RECEIVE_ALL_RECIPES, RECEIVE_RECIPE, REMOVE_RECIPE} from '../../actions/recipes_actions'


export default (oldstate = {}, action) => {
    Object.freeze(oldstate)
    switch (action.type) {
        case RECEIVE_ALL_RECIPES:
            return action.recipes
        case RECEIVE_RECIPE:
            // debugger
            let recipe = action.payload.recipe
            // debugger
            let newS = Object.assign({}, oldstate, {[recipe.id]: recipe})
            // debugger
            return newS
            // debugger
        case REMOVE_RECIPE:
            // debugger
            let newState = Object.assign({}, oldstate);
            delete newState[action.recipeId]
            // debugger
            return newState;
        default:
            return oldstate;
    }
} 


