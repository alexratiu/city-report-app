import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../core/Header';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
    };

    setEmail = (email) => {
        this.setState({ email: email.target.value });
    };

    setPassword = (password) => {
        this.setState({ password: password.target.value });
    };

    loginUser = () => {
        this.props.createSessionToken({
            email: this.state.email,
            password: this.state.password
        });
    };

    render() {
        return (
            <div>
                <Header>
                    <Link to="/">Home</Link>
                </Header>
                <h1>Login</h1>
                <input type="email" onChange={this.setEmail} />
                <input type="password" onChange={this.setPassword} />
                <button onClick={this.loginUser}>Login</button>
            </div>
        );
    }
};

export default Login;
