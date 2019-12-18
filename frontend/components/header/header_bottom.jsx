import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import {Route} from 'react-router-dom';

class HeaderBottom extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="bottom-header">
                <NavLink className = "recipes" exact to="/recipes">Recipes</NavLink>
                <div className="publish-search">
                    <Link className = "publish" to="/recipes/new">PUBLISH</Link>
                    <span className="search-find">
                        <input className="search-box"  type="text" placeholder="Let's Make... "/> 
                        <img className="find" src={window.find}/>
                    </span>
                </div>
            </div>
        )
    }


}

export default HeaderBottom;