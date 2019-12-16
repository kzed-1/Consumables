import React from 'react';
import {connect} from 'react-redux';
import { closeModal, openModal} from '../../actions/modal_action';
import Modal from '../modal';
import RecipeEditFormContainer from './recipe_edit_form_container';

//put edit form component in here

class RecipeNew extends React.Component {

    componentWillUnmount() {
        this.props.closeModal();
    }

    componentDidMount() {
        this.props.openModal("open")
    }

    render () {
        return (
            <div>
                <RecipeEditFormContainer/>
            </div>
        )
    }
}


const msp = (state) => ({
    modal: state.ui.modal
})

const mdp = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
})


export default connect(msp, mdp)(RecipeNew);