import React from 'react';

class RecipeIndexItem extends React.Component {

    componentDidMount() {

    }

    render () {
        // debugger;
        return (
            <div className="recipe" >
                {this.props.recipe.title}
            </div>
        )
    }
}

export default RecipeIndexItem;