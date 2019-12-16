import React from 'react';
import RecipeIndexItem from '../recipes/recipe_index_item';

class RecipeIndex extends React.Component {

    componentDidMount () {
        this.props.grabRecipes();
    }

    render () {

    
        const {recipes} = this.props;
   
        if (!recipes) {
            return null;
        }


        let recipesList = recipes.map((recipe) => (
            <RecipeIndexItem recipe={recipe} key={recipe.id}/>
        ))
  

        return (
           
            <div className="recipes-index">
                {recipesList}
            </div>
        
        )
    }
}

export default RecipeIndex;