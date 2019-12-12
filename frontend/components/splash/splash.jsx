import React from 'react';


class Splash extends React.Component {

    render () {
        return (
            <div className="splash">
                <div className="motto-box">
                    <div className="motto">
                        <h1 className="motto-text">MAKE RECIPES YOURS</h1>
                    </div>
                    <img className="background-pic" src={window.splashBackground} />
                </div>
            </div>
        )   
    }
}

export default Splash;