import React from 'react';

class RecipeShow extends React.Component {
    
    componentDidMount() {
        debugger
        this.props.grabRecipe(this.props.match.params.recipeId)
    }

    render () {

        const {recipe} = this.props

        if(!recipe){
            return null;
        }
        
        return (
            <div>
                {recipe.title}
                {recipe.body}
                {recipe.author_name}
            </div>
        )
    }
}

export default RecipeShow;