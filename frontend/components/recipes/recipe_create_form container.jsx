import React from 'react';
import {createRecipe} from '../../actions/recipes_actions'
import { connect } from 'react-redux';
import {openModal, closeModal} from '../../actions/modal_action';
import {withRouter} from 'react-router-dom';

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
    }

    componentDidMount() {
        this.props.openModal("open")
    }

    redirectAndSubmit () {
        debugger
        this.props.closeModal.call(this)
        this.props.history.push("/recipes")
    }
 


    handleInput (type) {
        return (e) => {
            this.setState({[type]: e.currentTarget.value})
        }
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.createRecipe(this.state)
            .then(() => this.redirectAndSubmit.call(this))
        
    }

    render () {
        return (
            <div className ="recipe-create-form-container">
                <form className= "recipe-create-form" onSubmit={this.handleSubmit}>
                    <label> I made a recipe called:</label>
                    <input 
                        type="text"
                        value={this.state.title}
                        onChange={this.handleInput('title')}
                    />
                    <label>Description:</label>
                    <textarea
                        value={this.state.body}
                        onChange={this.handleInput('body')}
                    />
                    <input type="submit" value="Start Recipe >>"/>  
                    
                </form>
            </div>
        )
    }


}

const msp = (state) => ({
    currentUser: state.entities.users[state.session.currentUserId],
})

const mdp = (dispatch) => ({
    createRecipe: (recipe) => dispatch(createRecipe(recipe)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())

})

export default withRouter(connect(msp, mdp)(RecipeCreateForm));