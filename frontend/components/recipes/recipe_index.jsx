import React from 'react';
import RecipeIndexItem from '../recipes/recipe_index_item';

class RecipeIndex extends React.Component {

    componentDidMount () {
        this.props.grabRecipes();
    }

    render () {

        // debugger
        const {recipes} = this.props;
        // debugger
        if (!recipes) {
            return null;
        }

        // debugger;
        let recipesList = recipes.map((recipe) => (
            <RecipeIndexItem recipe={recipe} key={recipe.id}/>
        ))
        // debugger;

        return (
           
            <div className="recipes-index">
                {recipesList}
            </div>
        
        )
    }
}

export default RecipeIndex;