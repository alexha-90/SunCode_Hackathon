import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Glyphicon } from 'react-bootstrap';
import testHelper from '../helperFunctions/testHelper';
//===============================================================================================//


class Landing extends Component {
    constructor() {
        super();
        this.state = {
            myTest: 'test?!'
        }
    }
    render() {
        return (
            <div className="testClass">
                <h1>Landing page</h1>
                {this.state.myTest}
                {testHelper()}
                <Glyphicon glyph="star" /> Star
                <Link to="/about">
                    <button>to about page</button>
                </Link>
            </div>
        )
    }
}

export default Landing;