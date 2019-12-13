import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import recipesReducer from './recipes/recipes_reducer';

export default combineReducers({
    users: usersReducer,
    recipes: recipesReducer
})

