import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

class homeComponent extends Component {

    head = () => {
        return (
            <Helmet>
                <title>Home Page</title>
            </Helmet>
        );
    }

    render() {
        return (
            <div>
                {this.head()}
                <h1>My Home Page</h1>
                <p>{this.props.message}</p>
                <Link to='/contact'>Contact</Link>
                <button onClick={() => console.log("This has been logged")}>Console log</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ message: state.message});

export default connect(mapStateToProps)(homeComponent);