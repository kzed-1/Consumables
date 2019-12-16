import React from 'react';


class RecipeEditForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            id: "",
            author_id: "",
            title: "",
            body: ""
        }
        this.handleSubmit= this.handleSubmit.bind(this);
        this.setStateRecipe = this.setStateRecipe.bind(this);
        
    }

    setStateRecipe () {
        // debugger
        const {id, author_id, title, body} = this.props.recipe
        this.setState({id: id, author_id: author_id, title: title, body: body })
    }

    componentDidMount () {
        this.props.grabRecipe(this.props.match.params.recipeId)
            .then(() => this.setStateRecipe())   
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
            .then(() => history.push(`/recipes/${recipe.id}`), () => this.props.openModal("update"))
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
                <form  className="edit-form" onSubmit={this.handleSubmit}>
                    <div className="form-header">
                        <div className="pic-box">

                        </div>
                        <div className="bottom-pic-bar">
                            <input className="edit-submit-button" type="submit" value="Publish" />
                        </div>

                    </div>
                    {errorslist}
                    <div className ="title-body-container">
                        <div className="pic-box-2"></div>
                        <input 
                            onChange={this.handleInput('title')}
                            value={this.state.title}
                            placeholder="Type your title..."
                            type="text"
                            className="edit-title-box"
                        />
                        <textarea 
                            className="edit-body-box"
                            onChange={this.handleInput('body')}
                            value={this.state.body}
                        />
                    </div>
                </form>

            </div>
        )
    }

}

export default RecipeEditForm;