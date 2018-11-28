import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class contactComponent extends Component {

    head = () => {
        return (
            <Helmet>
                <title>Contact Page</title>
            </Helmet>
        );
    }

    render() {
        return (
            <div>
                {this.head()}
                <h1>Contact Page</h1>
                <button onClick={() => console.log("This has been logged")}>Console log</button>
            </div>
        );
    }
}

export default contactComponent;