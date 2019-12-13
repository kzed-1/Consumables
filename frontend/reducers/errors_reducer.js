import {combineReducers} from 'redux';
import sessionsErrorsReducer from './session_errors_reducers';
import recipesErrorsReducer from './recipes_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionsErrorsReducer,
    recipes: recipesErrorsReducer
})

export default errorsReducer;