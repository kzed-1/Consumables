import { RECEIVE_ALL_RECIPES, RECEIVE_RECIPE, REMOVE_RECIPE} from '../../actions/recipes_actions';
import { RECEIVE_STEP, REMOVE_STEP} from '../../actions/steps_action';


export default (oldstate = {}, action) => {
    Object.freeze(oldstate)
    switch (action.type) {
        case RECEIVE_ALL_RECIPES:
            return action.recipes
        case RECEIVE_RECIPE:
            let recipe = action.payload.recipe
            let newS = Object.assign({}, oldstate, {[recipe.id]: recipe})
            return newS
        case REMOVE_RECIPE:
            let newState = Object.assign({}, oldstate);
            delete newState[action.recipeId]
            return newState;
        case RECEIVE_STEP: 
            let newSta = Object.assign({}, oldstate)
            let i = newSta[action.step.recipe_id].steps_instruction.indexOf(action.step.id)
            if (i < 0) {
                newSta[action.step.recipe_id].steps_instruction.push(action.step.id)
            }
            return newSta;
        case REMOVE_STEP: 
            let newStat = Object.assign({}, oldstate)
            let index = newStat[action.step.recipe_id].steps_instruction.indexOf(action.step.id)
            let array = newStat[action.step.recipe_id].steps_instruction
            if (index > -1) {
                array.splice(index,1);
            }
            return newStat;
        default:
            return oldstate;
    }
} 


