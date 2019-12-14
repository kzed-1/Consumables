import React from 'react';
import {closeModal} from '../actions/modal_action';
import { connect } from 'react-redux';
import RecipeCreateFormContainer from '../components/recipes/recipe_create_form container';
import {Route} from 'react-router-dom';



// class Modal extends React.Component {

//     render () {
//         return (
//             <div>

//             </div>
//         )
//     }
// }

function Modal({modal}) {

    if(!modal) {
        // debugger
        return null;
    } 

    return (
        <div className="modal-background" >
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                <RecipeCreateFormContainer />
            </div>
        </div>
    );

   

};

const msp = (state) => {
    // debugger
    return {
        modal: state.ui.modal
    }
}


export default connect(msp)(Modal);