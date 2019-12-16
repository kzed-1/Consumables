import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import ScrollToTop from '../components/scroll_to_top';


import App from './app'


const Root = ({store}) =>(
    <Provider store={store}>
        <HashRouter>
            <ScrollToTop/>
            <App />
        </HashRouter> 
    </Provider>
)

export default Root;