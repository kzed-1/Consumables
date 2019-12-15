import React from 'react';


class RecipeEditForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.recipe;
        this.handleSubmit= this.handleSubmit.bind(this)
        
    }

    componentDidMount () {
        this.props.grabRecipe(this.props.match.params.recipeId)
    }


    handleInput (type) {
        return (e) => {
            this.setState({[type]: e.currentTarget.value})
        }
    }

    handleSubmit (e) {
        const {history, recipe } = this.props
        e.preventDefault();
        this.props.editRecipe(this.state)
            .then(() => history.push(`/recipes/${recipe.id}`), )
    }
    

    render () {

        const {recipe, errors} = this.props;

        if(!recipe) {
            return null;
        }
        let errorslist = errors.map((error, i) => (
            <li className={`error-${i}`} key={i}>{error}</li>
        ))

        return (
            <div>   
                <form onSubmit={this.handleSubmit}>
                    {errorslist}
                    <label>Title:</label>
                    <input 
                        onChange={this.handleInput('title')}
                        value={this.state.title}
                        placeholder="Type your title..."
                        type="text"
                    />
                    <label>Description:</label>
                    <textarea 
                        onChange={this.handleInput('body')}
                        value={this.state.body}
                    />
                    <input type="submit" value="Publish"/>
                </form>

            </div>
        )
    }

}

export default RecipeEditForm;