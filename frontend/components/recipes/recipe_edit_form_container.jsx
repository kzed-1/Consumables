import { connect } from 'react-redux';
import { editRecipe, grabRecipe} from '../../actions/recipes_actions';
import { withRouter } from 'react-router-dom';
import RecipeEditForm from './recipe_edit_form';
import React from 'react';
import {closeModal} from '../../actions/modal_action';
import { createStep } from '../../actions/steps_action';
import {getAllSteps} from '../../reducers/selectors';





const msp = (state, ownProps) => ({
    recipe: state.entities.recipes[ownProps.match.params.recipeId],
    steps: Object.values(state.entities.steps),
    // steps: state.entities.recipe[ownProps.match.params.recipeId].steps_instruction,
    // steps: getAllSteps(state, ownProps),
    errors: state.errors.recipes
})

const mdp = (dispatch) => ({
    grabRecipe: (recipeId) => dispatch(grabRecipe(recipeId)),
    editRecipe: (recipe) => dispatch(editRecipe(recipe)),
    createStep: (step) => dispatch(createStep(step)),
    closeModal: () => dispatch(closeModal()),
    createStep: (step) => dispatch(createStep(step))

})

export default withRouter(connect(msp, mdp)(RecipeEditForm));

