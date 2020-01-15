import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_action';
import {withRouter} from 'react-router-dom';
import { deleteStep, grabStep, clearSteps} from '../../actions/steps_action';
import { grabRecipe } from '../../actions/recipes_actions';



class ConfirmDelete extends React.Component {
    constructor(props){
        super(props)

        this.handleDelete = this.handleDelete.bind(this);
        this.handleHistory = this.handleHistory.bind(this);
        // this,this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    componentDidMount () {
        const {stepId} = this.props
        this.props.grabStep(stepId)
    }

    componentWillUnmount () {
        const {step} = this.props
        this.props.clearSteps();
        this.props.grabRecipe(step.recipe_id)
    }

    handleDelete() {
        // debugger
        const {stepId, step} = this.props
        this.props.deleteStep(stepId)
            .then(this.handleHistory) 
                // debugger
                // return this.props.history.push(`/recipes/${step.recipe_id}/edit`)})
            // .then(this.props.closeModal)
    }

    handleHistory () {
        // debugger
        const { stepId, step } = this.props
        this.props.history.push(`/recipes/${step.recipe_id}/edit`)
        this.props.closeModal()
    }

    // handleCloseModal() {
    //     this.props.closeModal();
    // }

    render() {
        
        return (
            <div className="delete-modal-container">
                <p className="confirm">Confirm</p>
                <p className="are-you-sure">Are you sure you want to delete this Step?</p>
                <div className="cancel-delete-buttons">
                    <button onClick = {() => this.props.closeModal()} className="delete-step-modal-cancel-button" >Cancel</button>
                    <button onClick={this.handleDelete} className="delete-step-modal-delete-button">Delete</button>
                </div>
                <div onClick={() => this.props.closeModal()}  className="delete-step-modal-close-button">✕</div>
            </div>
        )
    }

}

const msp = (state, myProps, ownProps) => {
    return {
        recipe: state.entities.recipe,
        step: state.entities.steps[myProps.stepId],
        stepId: myProps.stepId
    }

}

const mdp = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
    deleteStep: (stepId) => dispatch(deleteStep(stepId)),
    grabStep: (stepId) => dispatch(grabStep(stepId)),
    grabRecipe: (recipeId) => dispatch(grabRecipe(recipeId)),
    clearSteps: () => dispatch(clearSteps())

})

const ConfirmDeleteContainer = withRouter(connect(msp, mdp)(ConfirmDelete));

export default ConfirmDeleteContainer;


