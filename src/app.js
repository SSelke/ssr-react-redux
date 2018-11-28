import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Home from './components/homeComponent';
import Contact from './components/contactComponent';

class app extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/contact" render={props => (
                        <Contact {...props} />
                    )} />
                    <Route path='/' render={props => (
                        <Home {...props} />
                    )} />
                </Switch>
            </div>
        );
    }
}

export default app;