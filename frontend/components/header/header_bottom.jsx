import React from 'react'
import { NavLink, Link } from 'react-router-dom';


class HeaderBottom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: "",
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleEnterKeyDown = this.handleEnterKeyDown.bind(this);

    }

    handleInput () {
        return (e) => {
            this.setState({search: e.currentTarget.value})
        }
    }

    handleEnterKeyDown (e) {
        if (e.key === "Enter") {
            this.props.history.push(`/recipes/search/?query=${this.state.search}`)
            this.props.grabSearchedRecipes(this.state.search)
        }
    }



    render() {
        return (
            <div className="bottom-header">
                <NavLink className = "recipes" exact to="/recipes">Recipes</NavLink>
                <div className="publish-search">
                    <Link className = "publish" to="/recipes/new">PUBLISH</Link>
                    <span className="search-find">
                        <input className="search-box"  onKeyDown={this.handleEnterKeyDown} onChange={this.handleInput()} value={this.state.search} type="text" placeholder="Let's Make... "/> 
                        <img className="find" src={window.find}/>
                    </span>
                </div>
            </div>
        )
    }


}

export default HeaderBottom;

