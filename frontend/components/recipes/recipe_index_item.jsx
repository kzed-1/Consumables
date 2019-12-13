import React from 'react';
import {Link} from 'react-router-dom';


class RecipeIndexItem extends React.Component {

    // componentDidMount() {

    // }

    render () {
        // debugger;
        return (
            <div className="recipe" >
                <div className="recipe-pic">

                </div>
                
                <div>
                    <Link to="/">{this.props.recipe.title}</Link>
                </div>
            </div>
        )
    }
}

export default RecipeIndexItem;

