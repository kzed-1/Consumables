import { RECEIVE_ALL_RECIPES, RECEIVE_RECIPE, REMOVE_RECIPE} from '../../actions/recipes_actions'


export default (oldstate = {}, action) => {
    Object.freeze(oldstate)
    switch (action.type) {
        case RECEIVE_ALL_RECIPES:
            return action.recipes
        case RECEIVE_RECIPE:
            return Object.assign({}, oldstate, {[action.payload.recipe.id]: action.payload.recipe})
        case REMOVE_RECIPE:
            let newState = Object.assign({}, oldstate);
            delete newState[action.id]
            return newState;
        default:
            return oldstate;
    }
} 


