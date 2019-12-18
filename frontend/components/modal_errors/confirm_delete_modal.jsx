import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_action';
import {withRouter} from 'react-router-dom';
import {deleteStep} from '../../actions/steps_action';
import { grabStep } from '../../actions/steps_action';



class ConfirmDelete extends React.Component {
    constructor(props){
        super(props)

        this.handleDelete = this.handleDelete.bind(this);
        // this,this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    componentDidMount () {
        const {stepId} = this.props
        this.props.grabStep(stepId)
    }

    handleDelete() {

        const {stepId, step} = this.props
        this.props.deleteStep(stepId)
            .then(() => this.props.history.push(`/recipes/${step.recipe_id}/edit`))
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
        step: state.entities.steps[myProps.stepId],
        stepId: myProps.stepId
    }

}

const mdp = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
    deleteStep: (stepId) => dispatch(deleteStep(stepId)),
    grabStep: (stepId) => dispatch(grabStep(stepId)),

})

const ConfirmDeleteContainer = withRouter(connect(msp, mdp)(ConfirmDelete));

export default ConfirmDeleteContainer;


