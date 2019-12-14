import React from 'react';
import {Link} from 'react-router-dom';


class RecipeIndexItem extends React.Component {

    render () {
        // debugger;
        const {recipe} = this.props

        return (
            <div className="recipe" >
                <div className="recipe-pic">

                </div>
                
                <div>
                    <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                </div>
            </div>
        )
    }
}

export default RecipeIndexItem;

