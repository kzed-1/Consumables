import * as RecipesApiUtil from '../util/recipe_util.jsx'

export const RECEIVE_ALL_RECIPES = "RECEIVE_ALL_RECIPES";
export const RECEIVE_RECIPE = "RECEIVE_RECIPE";
export const REMOVE_RECIPE = "REMOVE_RECIPE";
export const RECEIVE_RECIPE_ERRORS = "RECEIVE_RECIPE_ERRORS";
export const CLEAR_RECIPE_ERRORS = "CLEAR_RECIPE_ERRORS";


export const receiveAllRecipes = (recipes) => ({
    type: RECEIVE_ALL_RECIPES,
    recipes
});

export const receiveRecipe = (payload) => ({
    type: RECEIVE_RECIPE,
    payload
}); 

export const removeRecipe = (recipeId) => ({
    type: REMOVE_RECIPE,
    recipeId
}); 

export const receiveRecipeErrors = (errors) => ({
    type: RECEIVE_RECIPE_ERRORS,
    errors
});

export const clearRecipeErrors = () => ({
    type: CLEAR_RECIPE_ERRORS
});




export const grabRecipes = () => (dispatch) => (
    RecipesApiUtil.grabRecipes()
        .then(recipes => dispatch(receiveAllRecipes(recipes)))
)

export const grabRecipe = (recipeId) => (dispatch) => (
    RecipesApiUtil.grabRecipe(recipeId)
        .then(payload => dispatch(receiveRecipe(payload)))              
)

export const createRecipe = (recipe) => (dispatch) => (
    RecipesApiUtil.createRecipe(recipe)
        .then(payload => dispatch(receiveRecipe(payload)),
            error => dispatch(receiveRecipeErrors(error.responseJSON)))
);

export const editRecipe = (recipe) => (dispatch) => (
    RecipesApiUtil.editRecipe(recipe)
        .then(payload => dispatch(receiveRecipe(payload)), 
            error => dispatch(receiveRecipeErrors(error.responseJSON)))
)

export const deleteRecipe = (recipeId) => (dispatch) => (
    RecipesApiUtil.editRecipe(recipeId)
        .then(payload => dispatch(receiveRecipe(payload)), 
            error => dispatch(receiveRecipeErrors(errorresponseJSON)))
)

export const clearErrors = () => (dispatch) => (
    dispatch(clearRecipeErrors())
);


