import * as SearchAPIUtil from '../util/search_api_util';
import { RECEIVE_ALL_RECIPES } from '../actions/recipes_actions';

const recieveAllSearchedRecipes = (recipes) => ({
    type: RECEIVE_ALL_RECIPES,
    recipes
})


export const grabSearchedRecipes = (query) => (dispatch) => {
    return SearchAPIUtil.fetchRecipeSearch(query)
        .then(recipes => dispatch(recieveAllSearchedRecipes(recipes)))
}