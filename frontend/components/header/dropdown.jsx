import React from 'react';
import { logout } from '../../util/session_api_util';

class DropDown extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            dropdownClicked: false
        }
        this.showDropDown = this.showDropDown.bind(this);
        this.hideDropDown = this.hideDropDown.bind(this);
    }

    showDropDown (e) {
        e.preventDefault();
        this.setState({ dropdownClicked: true}, () => {
            document.addEventListener('click', this.hideDropDown)
        })
    }
    hideDropDown (e) {
        e.preventDefault();
        this.setState({ dropdownClicked: false}, () => {
            document.addEventListener('click', this.showDropDown)
        })
    }

    render () {
        const {logout} = this.props;
        let logoutButton = (this.state.dropdownClicked) ? 
            (<div><button onClick={() => logout()} >Logout</button></div>) 
            :
            (null);

        return (
            <div>
                <input onClick={this.showDropDown} type="text" />
                {logoutButton}
            </div>
        )
    }
}

export default DropDown;