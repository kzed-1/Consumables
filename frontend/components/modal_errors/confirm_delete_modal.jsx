import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_action';
import {withRouter} from 'react-router-dom';
import {deleteStep} from '../../actions/steps_action';



class ConfirmDelete extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        debugger;
        return (
            <div>
                <div>{this.props.stepId}</div>
            </div>
        )
    }

}

const msp = (state, myProps) => {
    debugger
    return {
        stepId: myProps.stepId
    }

}

const mdp = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
    deleteStep: (stepId) => dispatch(deleteStep(stepId))

})

const ConfirmDeleteContainer = connect(msp, mdp)(ConfirmDelete);

export default ConfirmDeleteContainer;


