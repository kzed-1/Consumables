import { connect } from 'react-redux';
import { grabSearchedRecipes } from '../../actions/search_actions';
import {clearRecipes} from '../../actions/recipes_actions';
import HeaderBottom from './header_bottom';
import { withRouter } from 'react-router-dom';


const msp = (state) => {
    return {
        recipes: Object.values(state.entities.recipes)
    }
}

const mdp = (dispatch) => {
    return {
        grabSearchedRecipes: (query) => dispatch(grabSearchedRecipes(query)),
        clearRecipes: () => dispatch(clearRecipes())
    }
}


export default withRouter(connect(msp, mdp)(HeaderBottom));