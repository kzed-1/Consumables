import React from 'react';
import {grabRecipes} from '../../actions/recipes_actions';
import RecipeIndex from './recipe_index';
import {connect} from 'react-redux'




const msp = (state) => ({
    recipes: Object.values(state.entities.recipes)
})


const mdp = (dispatch) => ({
    grabRecipes: () => dispatch(grabRecipes())
    // grabUser: () => 
})


export default connect(msp, mdp)(RecipeIndex)