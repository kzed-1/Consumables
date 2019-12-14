import React from 'react';
import RecipeIndexContainer from '../recipes/recipe_index_container'


class Splash extends React.Component {

    render () {
        return (
            <div className="splash">
                <div className="motto-box">
                    <div className="motto">
                        <h1 className="motto-text">MAKE RECIPES YOURS</h1>
                        <p className="motto-statement">Edibles is a community for people who loves to cook. Come share and eat with us!</p>
                    </div>
                    <img className="background-pic" src={window.splashBackground} />
                </div>
                <RecipeIndexContainer/>
            </div>

        )   
    }
}

export default Splash;