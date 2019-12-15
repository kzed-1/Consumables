import React from 'react';
import {createRecipe, grabRecipes} from '../../actions/recipes_actions'
import { connect } from 'react-redux';
import {openModal, closeModal} from '../../actions/modal_action';
import {withRouter} from 'react-router-dom';
import {clearErrors} from '../../actions/recipes_actions';

class RecipeCreateForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: "",
            author_id: this.props.currentUser.id,
            body: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModalCallback = this.props.closeModal.bind(this);
        this.redirectAndSubmit = this.redirectAndSubmit.bind(this);
        this.errorTimer = this.errorTimer.bind(this);
    }

    errorTimer() {
        setTimeout(() => {
            this.props.clearErrors();
        }, 2000)
    };

    componentDidMount() {
        this.props.openModal("open")
        this.props.grabRecipes();
    }

    redirectAndSubmit () {
        const { recipes } = this.props
        let lastRecipe = recipes[recipes.length - 1];
        this.props.closeModal.call(this)
        this.props.history.push(`/recipes/${lastRecipe}`)
    }
 


    handleInput (type) {
        return (e) => {
            this.setState({[type]: e.currentTarget.value})
        }
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.createRecipe(this.state)
            .then(() => this.redirectAndSubmit.call(this), () => this.errorTimer())
        
    }

    render () {

        const {errors} = this.props 

        

        let errorslist = errors.map((error, i) => (
            <div><div className={`recipe-error-${i}`} key={i}>{error}</div> <div className={`recipe-downarrow-${i}`} ></div></div>
        ))

        let titleError;
        let bodyError;

        for(let i =0; i < errorslist.length; i++ ){
            if (errors[i].includes("Title")){
                titleError = errorslist[i]
            } else if (errors[i].includes("Body")){
                bodyError = errorslist[i]
            }
        }

        return (
            <div className ="recipe-create-form-container">
                <div className="new-header"><h1>WHAT DO YOU WANT TO SHARE?</h1></div>
    
                <form className= "recipe-create-form" onSubmit={this.handleSubmit}>
    
                    <span className="input-wrapper-create-form">
                        {titleError}
                        <label className="new-title"> I made a recipe called:</label>
                        <input 
                            className="title-input"
                            type="text"
                            value={this.state.title}
                            onChange={this.handleInput('title')}
                        />
                    </span>

                    <span className="input-wrapper-create-form">
                        {bodyError}
                        <label className="new-description">Description:</label>
                        <textarea
                            className="description-input"
                            value={this.state.body}
                            onChange={this.handleInput('body')}
                        />
                    </span>
                    <input className="start-recipe-button" type="submit" value="Start Recipe»"/>  
                    
                </form>
            </div>
        )
    }


}

const msp = (state) => ({
    currentUser: state.entities.users[state.session.currentUserId],
    recipes: Object.keys(state.entities.recipes),
    errors: state.errors.recipes
})

const mdp = (dispatch) => ({
    createRecipe: (recipe) => dispatch(createRecipe(recipe)),
    grabRecipes: () => dispatch(grabRecipes()),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
})

export default withRouter(connect(msp, mdp)(RecipeCreateForm));