import { RECEIVE_STEP} from '../actions/steps_action';


export default (oldState = {}, action ) => {
    Object.freeze(oldState)
    let images;
    switch (action.type) {
        case RECEIVE_STEP:
            images = action.payload.images 
            return Object.assign({}, oldState, images)   
        default:
            return oldState;
    }
}