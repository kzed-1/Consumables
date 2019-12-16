import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_action';



class UpdateError extends React.Component {


    render () {
        return (
            <div className="update-error-container">
                <p>Please enter a title and a description</p>
                <button onClick={() => this.props.closeModal()} ><p className="x">×</p></button>
            </div>
        )     
    }

}


const mdp = (dispatch) => ({
    closeModal: () => dispatch(closeModal())
})

const UpdateErrorContainer = connect(null, mdp)(UpdateError);

export default UpdateErrorContainer;


