import React from 'react';
import RecipeIndexContainer from '../recipes/recipe_index_container'


class Splash extends React.Component {

    render () {
        return (
            <div className="splash">
                <div className="motto-box">
                    <div className="motto">
                        <h1 className="motto-text">MAKE RECIPES YOURS</h1>
                        <p className="motto-statement">Consumables is a community for people who loves to cook. Come share and eat with us!</p>
                    </div>
                    <img className="background-pic" src={window.splashBackground} />
                    <div className="content-center">
                        <div className="content-wrapper">
                            <div className="splash-content-middle">
                                <div className="content-1">
                                    <h1 className="content-header">STEP-BY-STEP</h1>
                                    <p className="paragraph"> Step by step instructions on how to make your favorite recipes, you can share with everyone. Inspire the cook in everyone, everyday.</p>
                                </div>
                                <div className="content-2">
                                    <h1 className="content-header">MADE BY YOU</h1>
                                    <p className="paragraph">Come one, come all, this is an open community to share recipes created by you. Please join us to share your creations. </p>
                                </div>
                                <div className="content-3">
                                    <h1 className="content-header">A HAPPY PLACE</h1>
                                    <p className="paragraph">Who doesn't love food? Join our community, eat, share, be merry.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divider">

                    </div>
                    <div className="explore-recipes">
                        <h1>EXPLORE RECIPES</h1>

                    </div>
                </div>
                <RecipeIndexContainer/>
            </div>

        )   
    }
}

export default Splash;