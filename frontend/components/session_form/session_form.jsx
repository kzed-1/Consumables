import React from 'react';


class SessionForm extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.userInfo;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.erros
    }

    handleInput (type) {
        return (e) => {
            this.setState({[type]: e.currentTarget.value})
        }
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.submitForm(this.state)
            // .then(() => this.props.history.push("/"))
    }

    errors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={i}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }


    render () {

        const {formType, navLink} = this.props
        let emailBox = null;
        let textBox = "New to Instructables?";

        if (formType === "Sign Me Up !") {
            textBox = "Already a member?";
            emailBox = <input  onChange={this.handleInput('email')} value={this.state.email} type="emailf" placeholder="Email" />
        }
        
        
        return (
            <div className ="session-form-container">
                <form className = "session-form-box" onSubmit={this.handleSubmit}>
                    {emailBox}
                    <input  onChange={this.handleInput('username')} value={this.state.username} type="text" placeholder="Username"/>
                    <input  onChange={this.handleInput('password')} value={this.state.password} type="password" placeholder="Password"/>
                    <input type="submit" value={formType}/>
                    <p>{textBox}{navLink}</p>
                </form>
            </div>
        )
    }
}

export default SessionForm;