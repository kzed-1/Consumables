import {connect} from 'react-redux';
import {grabSearchedRecipes} from '../../actions/search_actions';
import SearchIndex from './search_index';
import {withRouter} from 'react-router-dom';


const msp = (state) => {
    return {
        recipes: Object.values(state.entities.recipes)
    }
}

const mdp = (dispatch) => {
    return {
        grabSearchedRecipes: (query) => dispatch(grabSearchedRecipes(query))
    }
}


export default withRouter(connect(msp,mdp)(SearchIndex));