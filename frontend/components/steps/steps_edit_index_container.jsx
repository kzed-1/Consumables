import React from 'react';
import {connect} from 'react-redux';
import {createStep, editStep, deleteStep} from '../../actions/steps_action';
import {openModal} from '../../actions/modal_action';
import {withRouter} from 'react-router-dom';
import { getAllSteps } from '../../reducers/selectors';
import StepEditIndexItem from './step_edit_index_item';

class StepEditIndex extends React.Component {


    render () {

        const {steps, createStep, deleteStep, openModal} = this.props;

        if(!steps){
            return null;
        }
        
        let stepsList = steps.map((step, i) =>(
            <StepEditIndexItem 
                key={`edit-step-${i}`} 
                createStep={createStep} 
                editStep={editStep}
                deleteStep={deleteStep}
                history={this.props.history}
                step={step} 
                openModal = {openModal}
                i={i}
            />
        ))

        return (
            <div>
                {stepsList}
            </div>
        )
    }
}

const msp = (state, ownProps) => {
    return {
        steps: Object.values(state.entities.steps)
        // steps: getAllSteps(state, ownProps),
    }
}

const mdp = (dispatch) => ({
    createStep: (step) => dispatch(createStep(step)),
    editStep: (step) => dispatch(editStep(step)),
    deleteStep: (stepId) => dispatch(deleteStep(stepId)),
    openModal: (modal) => dispatch(openModal(modal))
})

export default withRouter(connect(msp,mdp)(StepEditIndex));