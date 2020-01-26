import {connect} from 'react-redux';
import {grabSearchedRecipes} from '../../actions/search_actions';
import {clearRecipes} from '../../actions/recipes_actions';
import SearchIndex from './search_index';
import {withRouter} from 'react-router-dom';


const msp = (state, ownProps) => {
    return {
        recipes: Object.values(state.entities.recipes),
        query: ownProps.location.search.slice(7)
    }
}

const mdp = (dispatch) => {
    return {
        grabSearchedRecipes: (query) => dispatch(grabSearchedRecipes(query)),
        clearRecipes: () => dispatch(clearRecipes())
    }
}


export default withRouter(connect(msp,mdp)(SearchIndex));