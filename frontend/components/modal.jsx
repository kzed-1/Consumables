import React from 'react';
import {closeModal} from '../actions/modal_action';
import { connect } from 'react-redux';
import RecipeCreateFormContainer from '../components/recipes/recipe_create_form container';
import {Route} from 'react-router-dom';
import UpdateErrorContainer from '../components/modal_errors/update_error_container';



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

    let component;
    switch (modal) {
        case 'open':
            component = <RecipeCreateFormContainer />
            break;
        case "update":
            component = <UpdateErrorContainer />
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" >
            <div className={`modal-child-${modal}`} onClick={e => e.stopPropagation()}>
                {component}
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