import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Glyphicon } from 'react-bootstrap';
//===============================================================================================//


class Landing extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        return (
            <div className="mainContainer">
                <div className="greetingText">
                    <h1>Kill the site Survey! Get Started</h1>
                    <Link to="/Step1">
                        <Button>To Step 1</Button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Landing;