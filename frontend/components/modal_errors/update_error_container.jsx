import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_action';



class UpdateStepError extends React.Component {

    render() {
        return (
            <div className="update-error-container">
                <p>Please enter a title, a description, and submit a picture</p>
                <button onClick={() => this.props.closeModal()} ><p className="x">×</p></button>
            </div>
        )     
    }

}


const mdp = (dispatch) => ({
    closeModal: () => dispatch(closeModal())
})

const UpdateStepErrorContainer = connect(null, mdp)(UpdateStepError);

export default UpdateStepErrorContainer;


