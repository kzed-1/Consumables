import { RECEIVE_STEP } from '../actions/steps_action';
import { RECEIVE_RECIPE } from '../actions/recipes_actions';


export default (oldState = {}, action ) => {
    Object.freeze(oldState)
    let images;
    switch (action.type) {
        case RECEIVE_STEP:
            images = action.payload.images 
            return Object.assign({}, oldState, images)   
        case RECEIVE_RECIPE:
            images = action.payload.images 
            return Object.assign({}, oldState, images)   
        default:
            return oldState;
    }
}