import React from 'react';
import {connect} from 'react-redux';
import StepEditIndexItem from './step_edit_item';
import {createStep, editStep, deleteStep} from '../../actions/steps_action';

class StepEditIndex extends React.Component {


    render () {

        const {steps} = this.props;

        if(!steps){
            return null;
        }
        
        let stepsList = steps.map((step) =>(
            <StepEditIndexItem 
                key={`edit-step-${i}`} 
                createStep={createStep} 
                editStep={editStep}
                deletStep={deleteStep}
                step={step} 
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

const msp = (state) => {
    return {
        steps: Object.values(state.entities.steps)
    }
}

const mdp = (dispatch) => ({
    createStep: (step) => dispatch(createStep(step)),
    editStep: (step) => dispatch(editStep(step)),
    deleteStep: (stepId) => dispatch(deletStep(stepId))
})

export default connect(msp,mdp)(StepEditIndex);