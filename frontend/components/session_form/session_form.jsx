import React from 'react';



class SessionForm extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.userInfo;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
        this.errorTimer = this.errorTimer.bind(this);
    }

    handleInput (type) {
        return (e) => {
            this.setState({[type]: e.currentTarget.value})
        }
    };

    errorTimer () {
        setTimeout(() => {
            this.props.clearErrors();
        }, 2000)
    };

    handleSubmit (e) {
        e.preventDefault();
        this.props.submitForm(this.state)
            .then(() => this.props.history.push("/"), () => this.errorTimer());
        
    };

    handleDemoUser (e) {
        e.preventDefault();
        const demoUser = { username: "d3", password: "hunter2"}
        this.props.loginForm(demoUser)
    };

    componentWillUnmount () {
        this.props.clearErrors();
    }



    render () {

        const {formType, navLink, errors} = this.props
        let emailBox = null;
        let textBox = "New to Consumables? ";


        let errorslist = errors.map((error, i) => (
            <div><li className={`error-${i}`} key={i}>{error}</li><div className={`downarrow-${i}`} ></div></div>
        ))
        
        let emailError;
        let usernameError;  
        let passwordError; 
        
        
        for (let i = 0; i < errors.length; i++) {
        
            if (errors[i].includes("Email")) {
                emailError = errorslist[i]
            } else if (errors[i].includes("Username")) {
                usernameError = errorslist[i]
            } else if (errors[i].includes("Password")) {
                passwordError = errorslist[i]
            } else if (errors[i].includes("Please enter your username") && this.state.username.length === 0) {
                usernameError = errorslist[i]
            } else if (errors[i].includes("Please enter your password") && this.state.password.length === 0) {
                passwordError = errorslist[i]
            }
        }
        
        if (formType === "Sign Me Up !") {
            textBox = "Already a member? ";
            emailBox = <input  className="input" onChange={this.handleInput('email')} value={this.state.email} type="emailf" placeholder="Email" />
        
        }
        
    
        
        return (

            <div className ="session-form">

                <span className ="session-form-container">
                    <form className = "session-form-box" onSubmit={this.handleSubmit}>
                        <button className="demo-button" onClick={this.handleDemoUser}>Demo User</button>
                        <div className="or-line-container"><div className="or-line" ></div><span className="ortext">OR</span><div className="or-line" ></div></div>
                    
                        <span className="input-wrapper">{emailError}{emailBox}</span>
                        
                        <span className="input-wrapper">{usernameError}<input className="input" onChange={this.handleInput('username')} value={this.state.username} type="text" placeholder="Username"/></span>
                        <span className="input-wrapper">{passwordError}<input className="input" onChange={this.handleInput('password')} value={this.state.password} type="password" placeholder="Password"/></span>
                        <input className="button" type="submit" value={formType}/>
                        <p className ="bottom-p-line">{textBox}{navLink}</p>
                    </form>
                </span>
            </div>
        )
    }
}

export default SessionForm;