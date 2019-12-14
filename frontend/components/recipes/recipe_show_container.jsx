import React from 'react';
import {connect} from 'react-redux';
import {grabRecipe} from '../../actions/recipes_actions';
import RecipeShow from './recipe_show';

const msp = (state, ownProps) => ({
    recipe: state.entities.recipes[ownProps.match.params.recipeId]
})

const mdp = (dispatch) => ({
    grabRecipe: (recipeId) => dispatch(grabRecipe(recipeId))
})

export default connect(msp, mdp)(RecipeShow);