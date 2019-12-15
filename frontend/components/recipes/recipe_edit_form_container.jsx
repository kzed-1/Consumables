import { connect } from 'react-redux';
import { editRecipe } from '../../util/recipe_util';
import { withRouter } from 'react-router-dom';
import RecipeEditForm from './recipe_edit_form';



const msp = (state, ownProps) => ({
    recipe: state.entities.recipes[ownProps.match.params.recipeId],
    errors: state.errors.recipes
})

const mdp = (dispatch) => ({
    grabRecipe: (recipeId) => dispatch(grabRecipe(recipeId)),
    editRecipe: (recipe) => dispatch(editRecipe(recipe))

})

export default withRouter(connect(msp, mdp)(RecipeEditForm));
