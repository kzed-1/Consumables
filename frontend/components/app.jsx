import React from 'react';
import {Route} from 'react-router-dom'
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import HeaderTopContainer from './header/header_top_container';


const App = () => (
    <div>
        <header className ="header">
            <h1>Edibles</h1>
            <HeaderTopContainer />
        </header>
        <Route path="/login" component={LoginFormContainer}/>
        <Route path="/signup" component={SignupFormContainer}/>
    </div>
)

export default App;