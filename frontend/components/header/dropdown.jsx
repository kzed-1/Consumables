import React from 'react';
import { logout } from '../../util/session_api_util';
import { Link } from 'react-router-dom';
import {connect, withRouter} from 'react-router-dom';

// class DropDown extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             dropdownClicked: false
//         }
//         this.showDropDown = this.showDropDown.bind(this);
//         this.hideDropDown = this.hideDropDown.bind(this);
//     }

//     showDropDown (e) {
//         e.preventDefault();
//         this.setState({ dropdownClicked: true}, () => {
//             document.addEventListener('click', this.hideDropDown)
//         })
//     }
//     hideDropDown (e) {
//         e.preventDefault();
//         this.setState({ dropdownClicked: false}, () => {
//             document.addEventListener('click', this.showDropDown)
//         })
//     }

//     render () {
//         const {logout} = this.props;
//         let logoutButton = (this.state.dropdownClicked) ? 
//             (<div className="dropdown"><button className="logoutbutton" onClick={() => logout()} >Logout</button></div>) 
//             :
//             (null);

//         return (
//             <div>
//                 <div>
//                     <img className="user" src={window.user} alt="" onClick={this.showDropDown}/>
//                 </div>
//                 {logoutButton}
//             </div>
//         )

//     }
// }


class DropDown extends React.Component {
    constructor(props){
        super(props)
        this.state={
            open: false
        };
        this.handleDropdown = this.handleDropdown.bind(this)
        this.showDropDown = this.showDropDown.bind(this)
        this.hideDropDown = this.hideDropDown.bind(this)
    }

    handleDropdown () {
        this.setState({open: !this.state.open})
    }

    showDropDown () {
        this.setState({open: true})
    }

    hideDropDown () {
        this.setState({open: false})
    }


    render () {
    
        const {logout} = this.props;
    

        const component = (this.state.open) ? (
            <div className="dropdown">
                <div className="logout-profile">
                    <Link onMouseDown={() => this.props.history.push("/about")} className="profile-link" to="/about">About Us</Link>
                    <button className="logoutbutton" onMouseDown={() => logout()}>Log Out</button>
                </div>
                <div className="button-divider"><Link onMouseDown={() => this.props.history.push("/recipes/new")}className="create-recipe-link" to="/recipes/new">New Recipe</Link></div> 
            </div>
        ): null;

        return (
            <div onBlur={this.hideDropDown} onFocus={this.showDropDown} tabIndex="0"  >
                <img className="user" src={window.user} onMouseDown={this.handleDropdown}/>
                {component}
            </div>
        )
    }
}

export default DropDown;