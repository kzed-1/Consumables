import { connect } from 'react-redux';
import { editRecipe, grabRecipe} from '../../actions/recipes_actions';
import { withRouter } from 'react-router-dom';
import RecipeEditForm from './recipe_edit_form';
import React from 'react';
import {openModal} from '../../actions/modal_action';

// class RecipeEditFormWrapper extends React.Component {

//     componentDidMount () {
//         this.props.grabRecipe(this.props.match.params.recipeId)
//     }

//     render () {
//         // const {editRecipe, recipe, errors, history} = this.props
        

//         if (!recipe) {
//             return null;
//         }
//         return (
//             <RecipeEditForm 
//                 // recipe={recipe}
//                 // editRecipe={editRecipe}
//                 // errors={errors}
//                 // history={history}
//                 props={this.props}
//             />
//         )

//     }
// }




const msp = (state, ownProps) => ({
    recipe: state.entities.recipes[ownProps.match.params.recipeId],
    errors: state.errors.recipes
})

const mdp = (dispatch) => ({
    grabRecipe: (recipeId) => dispatch(grabRecipe(recipeId)),
    editRecipe: (recipe) => dispatch(editRecipe(recipe)),
    openModal: (modal) => dispatch(openModal(modal))

})

export default withRouter(connect(msp, mdp)(RecipeEditForm));

