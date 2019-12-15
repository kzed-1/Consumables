import { RECEIVE_ALL_RECIPES, RECEIVE_RECIPE, REMOVE_RECIPE} from '../../actions/recipes_actions'


export default (oldstate = {}, action) => {
    Object.freeze(oldstate)
    switch (action.type) {
        case RECEIVE_ALL_RECIPES:
            return action.recipes
        case RECEIVE_RECIPE:
            let recipe = action.payload.recipe
            return Object.assign({}, oldstate, {[recipe.id]: recipe})
        case REMOVE_RECIPE:
            let newState = Object.assign({}, oldstate);
            delete newState[action.recipeId]
            return newState;
        default:
            return oldstate;
    }
} 


