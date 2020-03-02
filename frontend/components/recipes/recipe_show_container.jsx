import React from 'react';
import {connect} from 'react-redux';
import {grabRecipe, deleteRecipe, grabRecipesByUser} from '../../actions/recipes_actions';
import RecipeShow from './recipe_show';
import {withRouter} from 'react-router-dom';
import {clearSteps} from '../../actions/steps_action';

const msp = (state, ownProps) => ({
    recipe: state.entities.recipes[ownProps.match.params.recipeId],
    currentUserId: state.session.currentUserId,
    moreRecipes: state.entities.recipes
})

const mdp = (dispatch) => ({
    grabRecipe: (recipeId) => dispatch(grabRecipe(recipeId)),
    deleteRecipe: (recipeId) => dispatch(deleteRecipe(recipeId)),
    clearSteps: () => dispatch(clearSteps()),
    grabUserRecipe: (userId) => dispatch(grabRecipesByUser(userId))
})

export default withRouter(connect(msp, mdp)(RecipeShow));