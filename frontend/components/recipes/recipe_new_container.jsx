import React from 'react';
import {connect} from 'react-redux';
import { closeModal, openModal} from '../../actions/modal_action';
import RecipeEditFormContainer from './recipe_edit_form_container';
import {Link} from 'react-router-dom'

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
                <div className="edit-form" >
                    <div className="form-header">
                        <div className="pic-box">

                        </div>
                        <div className="bottom-pic-bar">
                            <button className="plus-add-button"><div >➕Add</div></button>
                        </div>

                    </div>
                    <div className={`intro-step-segment-${null}`} >
                        <div className={`intro-pic-box ${null}`}>
                            {null}
                        </div>
                        <div className="title-description-wrapper">
                            <p className="edit-step-body">{null}</p>
                        </div>
                        <div className="intro-step-button">
                            <div className="drag-icon">☰</div>
                        </div>
                        <div className="arrow-wrapper">
                            <div className="placeholder"></div>
                            <img src={window.carat} className="arrow-icon"></img>
                            <div className="placeholder"></div>
                        </div>
                    </div>


                    <button className="add-step-button" >Add Step</button>
                </div>

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