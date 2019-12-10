import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';


const msp = (state) => ({
    userInfo: {
        username: "",
        password: ""
    },
    errors: state.errors.session,
    formType: "Login",
    navLink: <Link to="/signup">Sign Up</Link>
});

const mdp = (dispatch) => ({
    submitForm: (formUser) => dispatch(login(formUser))
})

export default connect(msp, mdp)(SessionForm);