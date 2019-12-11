import React from 'react';
import { logout } from '../../util/session_api_util';
import { Link } from 'react-router-dom';

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
    }

    handleDropdown () {
        this.setState({open: !this.state.open})
    }

    render () {
        // debugger
        const {logout} = this.props;
        // debugger

        return (
            <div onBlur={() => this.handleDropdown()} onFocus={() => this.handleDropdown()}tabIndex = "0" >
                <img className="user" src={window.user}/>
                {this.state.open && 
                (   <div className="dropdown">
                        <Link to="/">Profile</Link>
                        <button className="logoutbutton" onMouseDown={() => logout()}>Logout</button>
                    </div>
                )}
            </div>
        )
    }
}

export default DropDown;