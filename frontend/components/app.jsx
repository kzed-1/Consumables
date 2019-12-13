import React from 'react';
import {Route} from 'react-router-dom'
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import HeaderTopContainer from './header/header_top_container';
import {NavLink, Link} from 'react-router-dom';
import Splash from './splash/splash';
import {Switch} from 'react-router-dom';
import HeaderBottom from './header/header_bottom';
import {AuthRoute} from '../util/route_utils';
import RecipeIndexContainer from './recipes/recipe_index_container';
import Modal from './modal';



const App = () => (
    <div>
        <header className ="header">
            <div className ="top-header">
                <button className="home-button"><NavLink to="/"><img src={window.home} alt=""/></NavLink></button>
                <HeaderTopContainer />
            </div>
            <div className ="bottom-border">
                <span className="logo-title">
                    <Link className="logo" to="/"><img src={window.logo}/></Link> 
                    <Link className="title" to="/"><h2>edibles</h2></Link> 
                </span>
                <HeaderBottom />
            </div>
        </header>
        <Switch>
            <Route path="/recipes/new" component={Modal}/>
            <Route path="/recipes" component={RecipeIndexContainer}/>
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