import React from 'react';
import { logout } from '../../util/session_api_util';
import { Link } from 'react-router-dom';
import { connect, withRouter } from 'react-router-dom';

class DropDown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        };
    }

    handleDropdown() {
        this.setState({ open: !this.state.open })
    }


    render() {

        const { logout } = this.props;


        const component = (this.state.open) ? (
            <div className="recipe-edit-dropdown">
                <div>Step</div>
                <div>Photos</div>
                {/* <div className="logout-profile">
                    <Link to="/"><p className="profile-link">Profile</p></Link>
                    <button className="logoutbutton" onMouseDown={() => logout()}>Log Out</button>
                </div> */}
                {/* <div className="button-divider"><Link onMouseDown={() => this.props.history.push("/recipes/new")} className="create-recipe-link" to="/recipes/new">New Recipe</Link></div> */}
            </div>
        ) : null;

        return (
            <div onBlur={() => this.handleDropdown()} onFocus={() => this.handleDropdown()} tabIndex="0" >
                <img className="user" src={window.user} />
                {component}
            </div>
        )
    }
}

export default DropDown;