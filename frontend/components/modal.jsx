import React from 'react';
import {closeModal} from '../actions/modal_action';
import { connect } from 'react-redux';


// class Modal extends React.Component {

//     render () {
//         return (
//             <div>

//             </div>
//         )
//     }
// }

function Modal({modal, closeModal}) {

    if(!modal) {
        return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );

}

const msp = (state) => {
    return {
        modal: state.ui.modal
    }
}

const mdp = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal())
    }
} 

export default connect(msp, mdp)(Modal);