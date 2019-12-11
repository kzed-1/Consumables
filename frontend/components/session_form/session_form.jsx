import React from 'react';



class SessionForm extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.userInfo;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this)
    }

    handleInput (type) {
        return (e) => {
            this.setState({[type]: e.currentTarget.value})
        }
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.submitForm(this.state)
            .then(() => this.props.history.push("/"))
    }

    handleDemoUser (e) {
        e.preventDefault();
        const demoUser = { username: "d3", password: "hunter2"}
        // debugger
        // this.setState(demoUser);
        // debugger
        this.props.loginForm(demoUser)
        // debugger
    }


    render () {

        const {formType, navLink, errors} = this.props
        let emailBox = null;
        let textBox = "New to Instructables?";
        let emailError, usernameError, passwordError;

        let errorslist = errors.map((error, i) => (
            <li className={`error-${i}`} key={i}>{error}</li>
        ))

        for (let i = 0; i < errors.length; i++) {
            // debugger
            if (errors[i].includes("Email")) {
                emailError = errorslist[i]
            } else if (errors[i].includes("Username")) {
                usernameError = errorslist[i]
            } else if (errors[i].includes("Password")) {
                passwordError = errorslist[i]
            }
        }

        if (formType === "Sign Me Up !") {
            textBox = "Already a member?";
            emailBox = <input  className="input" onChange={this.handleInput('email')} value={this.state.email} type="emailf" placeholder="Email" />
            // debugger
        }
        
        // debugger
        
        return (

            <div className ="session-form-container">
                <form className = "session-form-box" onSubmit={this.handleSubmit}>
                    {emailBox}
                    {emailError}
                    <input className="input" onChange={this.handleInput('username')} value={this.state.username} type="text" placeholder="Username"/>
                    {usernameError}
                    <input className="input" onChange={this.handleInput('password')} value={this.state.password} type="password" placeholder="Password"/>
                    {passwordError}
                    <input className="button" type="submit" value={formType}/>
                    <button className="button" onClick={this.handleDemoUser}>Demo User</button>
                    <p className ="bottom-p-line">{textBox}{navLink}</p>
                </form>
            </div>
        )
    }
}

export default SessionForm;