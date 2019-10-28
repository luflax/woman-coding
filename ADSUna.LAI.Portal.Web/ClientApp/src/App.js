import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './template/Layout';
import { Home } from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
            </Layout>
        );
    }
}
