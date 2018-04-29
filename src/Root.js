import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Register from './components/Auth/Register/Register.container';
import Login from './components/Auth/Login/Login.container';
import PrivateRoute from './components/core/PrivateRoute';
import App from './components/App';

class Root extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' component={Login} />
                    <PrivateRoute loggedUser={this.props.loggedUser} path="/admin" component={() => <h1>Admin page</h1>} />
                </Switch>
            </Router>
        )
    }
};

Root.propTypes = {
    loggedUser: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        email: PropTypes.string,
    }).isRequired,
};

export default Root;
