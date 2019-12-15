import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
import {signup, login, logout} from './actions/session_actions'
import { grabRecipes, grabRecipe, createRecipe, editRecipe, deleteRecipe } from './actions/recipes_actions'

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

    window.store = store 
    window.signup = signup
    window.login = login
    window.logout = logout
    window.grabRecipes = grabRecipes
    window.grabRecipe = grabRecipe
    window.createRecipe = createRecipe
    window.deleteRecipe = deleteRecipe
    window.editRecipe = editRecipe


    // let recipe = {author_id: 28, title:"how to make bananacream pie", body:"This is how to make bananacream pie"}

    

    ReactDOM.render(<Root store={store}/>, root)
})