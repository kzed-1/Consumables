import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup, logout } from '../../actions/session_actions';
import HeaderTop from './header_top';
import {withRouter} from 'react-router-dom';


const msp = (state) => ({
    currentUserId: state.session.currentUserId
})

const mdp = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default withRouter(connect(msp,mdp)(HeaderTop));