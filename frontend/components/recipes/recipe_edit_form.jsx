import React from 'react';
import {Link} from 'react-router-dom';
import StepEditIndexContainer from '../steps/steps_edit_index_container';


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
        this.handleCreateStep = this.handleCreateStep.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.emptyBody = this.emptyBody.bind(this);
        // this.handleLog = this.handleLog.bind(this);
        
    }

    setStateRecipe () {
  
        const {id, author_id, title, body} = this.props.recipe
        this.setState({id: id, author_id: author_id, title: title, body: body })
    }

    componentDidMount () {
        this.props.grabRecipe(this.props.match.params.recipeId)
            .then(() => this.setStateRecipe());
        this.props.closeModal();       

        
    }

    handleInput (type) {
        return (e) => {
            this.setState({[type]: e.currentTarget.value})
        }
    }

    // handleLog () {
    //     console.log("hello")
    // }

    emptyBody () {
        const {recipe} = this.props
        if(recipe.body.length === 0) {
            return "inactive"
        }else {
            return "active"
        }
    }

    handleCreateStep () {
        this.props.createStep({recipe_id: this.props.recipe.id, title: "", body:""})
    }

    handleSubmit (e) {
        const {history, recipe } = this.props
        e.preventDefault();

        this.props.editRecipe(this.state)
            .then(() => history.push(`/recipes/${recipe.id}`), () => this.props.openModal("update"))
    }   
    
    handleEdit () {
        const {recipe} = this.props
        this.props.history.push(`/recipes/${recipe.id}/edit/stepZero`)
    }

    render () {


        const {recipe, errors, steps, createStep} = this.props;

        if(!recipe) {
            return null;
        }
        let errorslist = errors.map((error, i) => (
            <li className={`error-${i}`} key={i}>{error}</li>
        ))

        return (
            <div>   
                <div  className="edit-form" >
                    <div className="form-header">
                        <div className="pic-box">

                        </div>
                        <div className="bottom-pic-bar">
                            {/* <input className="edit-submit-button" type="submit" value="Publish" /> */}
                            <button className="edit-submit-button"><Link  to={`/recipes/${recipe.id}`}>Publish</Link></button> 
                        </div>

                    </div>
                    {errorslist}
                    <div className={`intro-step-segment-${this.emptyBody()}`} onClick={this.handleEdit}>
                        <div className="intro-pic-box"></div>
                        <div className="title-description-wrapper">
                            <Link to={`/recipes/${recipe.id}/edit/stepZero`}className="link-to-edit-recipe-title-description">{`Intro + Description: ${recipe.title}`}</Link>
                            <p className="edit-step-body">{recipe.body}</p>
                        </div>
                        <div className="intro-step-button">
                            <div className="drag-icon">☰</div>
                            <img src={window.carat} className="arrow-icon"></img>
                            <div className="close-icon">✕</div>
                        </div>
                    </div>
                    <StepEditIndexContainer />


                    <button className ="add-step-button" onClick={this.handleCreateStep}>Add Step</button>

                    {/* <div className ="title-body-container">
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
                    </div> */}
                </div>

            </div>
        )
    }

}

export default RecipeEditForm;