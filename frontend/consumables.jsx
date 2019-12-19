import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {signup, login, logout} from './actions/session_actions';
import { grabRecipes, grabRecipe, createRecipe, editRecipe, deleteRecipe } from './actions/recipes_actions';
import {createStep, editStep, deleteStep, grabStep} from './actions/steps_action';

document.addEventListener("DOMContentLoaded", ()=> {
    const root = document.getElementById("root");
    let store, preloadedState;
    if(window.currentUser) {
        preloadedState = {
            entities: {
                users: {[window.currentUser.id]: window.currentUser}
            },
            session: {currentUserId: window.currentUser.id}
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    }else {
        store = configureStore();
    }

    

    ReactDOM.render(<Root store={store}/>, root)
})