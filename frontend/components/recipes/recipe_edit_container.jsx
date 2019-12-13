import React from 'react';
import {connect} from 'react-redux';
import { closeModal, openModal} from '../../actions/modal_action';
import Modal from '../modal';

class RecipeEdit extends React.Component {

    componentWillUnmount() {
        this.props.closeModal();
    }

    componentDidMount() {
        this.props.openModal("open")
    }

    render () {
        return (
            <div>

            </div>
        )
    }
}


const msp = (state) => ({
    modal: state.ui.modal
})

const mdp = (dispatch) => ({
    closeModal: (modal) => dispatch(closeModal(modal)),
    openModal: (modal) => dispatch(openModal(modal))
})


export default connect(msp, mdp)(RecipeEdit);