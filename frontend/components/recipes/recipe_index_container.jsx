import React from 'react';
import {grabRecipes} from '../../actions/recipes_actions';
import RecipeIndex from './recipe_index';
import {connect} from 'react-redux'
import { clearSteps } from '../../actions/steps_action';




const msp = (state) => ({
    recipes: Object.values(state.entities.recipes)
})


const mdp = (dispatch) => ({
    grabRecipes: () => dispatch(grabRecipes()),
    clearSteps: () => dispatch(clearSteps())
    // grabUser: () => 
})


export default connect(msp, mdp)(RecipeIndex)