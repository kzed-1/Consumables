import React from 'react';
import {Route} from 'react-router-dom'
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import HeaderTopContainer from './header/header_top_container';
import {NavLink} from 'react-router-dom';
import Splash from './splash/splash';
import {Switch} from 'react-router-dom';
import HeaderBottom from './header/header_bottom';
import {AuthRoute} from '../util/route_utils';


const App = () => (
    <div>
        <header className ="header">
            <div className ="top-header">
                <button className="home-button"><NavLink to="/"><img src={window.home} alt=""/></NavLink></button>
                <HeaderTopContainer />
            </div>
            <div className ="bottom-border">
                <span className="logo-title">
                    <img className="logo" src={window.logo}/>
                    <h2 className="title">edibles</h2>
                </span>
                <HeaderBottom />
            </div>
        </header>
        <Switch>
            <Route exact path="/" component={Splash}/>
            <AuthRoute  path="/login" component={LoginFormContainer}/>
            <AuthRoute  path="/signup" component={SignupFormContainer}/>
        </Switch>
        <footer className="footer">
            <span className="footer-items">
                <div className="line"></div>
                <div className="img-link" >Icons made by <a  href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </span>
        </footer>
    </div>
)

export default App;