import React from 'react'
import { NavLink, Link } from 'react-router-dom';


class HeaderBottom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: "",
            class: ""
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleEnterKeyDown = this.handleEnterKeyDown.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.focusSearchFindBox = this.focusSearchFindBox.bind(this)

    }

    handleInput () {
        return (e) => {
            this.setState({search: e.currentTarget.value})
        }
    }

    handleEnter () {
        this.setState({search: ""})
    }

    handleEnterKeyDown (e) {
        if (e.key === "Enter" && this.state.search.length > 0) {
            this.props.history.push(`/recipes/search/?query=${this.state.search}`)
            this.props.grabSearchedRecipes(this.state.search).then(
                this.handleEnter()
            )
        }
    }

    focusSearchFindBox () {
        this.setState({class: "focused"})
    }



    render() {
        return (
            <div className="bottom-header">
                <NavLink className = "recipes" exact to="/recipes">Recipes</NavLink>
                <div className="publish-search">
                    <Link className = "publish" to="/recipes/new">PUBLISH</Link>
                    <span className={`search-find ${this.state.class}`}>
                        <input onFocus={this.focusSearchFindBox} 
                            onBlur={() => this.setState({class: ""})} 
                            value={this.state.search} type="text" 
                            onKeyDown={this.handleEnterKeyDown} 
                            onChange={this.handleInput()} 
                            placeholder="Let's Make... "
                            className="search-box"  
                        /> 
                        <img className="find" src={window.find}/>
                    </span>
                </div>
            </div>
        )
    }


}

export default HeaderBottom;

