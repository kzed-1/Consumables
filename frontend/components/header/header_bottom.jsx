import React from 'react'
import { NavLink } from 'react-router-dom';

class HeaderBottom extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="bottom-header">
                <NavLink exact to="/recipes">Recipes</NavLink>
                <input className="search-box" type="text" /> 
            </div>
        )
    }


}

export default HeaderBottom;