import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, withRouter} from 'react-router-dom';

const msp = state => ({
    loggedIn: Boolean(state.session.currentUserId)
});

const Auth = (props) => {
    const {loggedIn, path, component: Component} = props

    return (
        <Route 
            path={path}
            render ={props => (
                loggedIn ? <Redirect to="/" /> : <Component {...props}/>
            )}
        />
    )
}

const Protected = (props) => {
    const {loggedIn, path, component: Component} = props

    return (
        <Route 
            path={path}
            render ={props => (
                loggedIn ? <Component {...props} /> : <Redirect to="/signup"/>
            )}
        />
    )
}

export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp)(Protected));