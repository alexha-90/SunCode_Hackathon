import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Glyphicon } from 'react-bootstrap';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';


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
                <h1>Kill the Site Survey</h1>

                <div className="imageGallery">
                    <img src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940/"/>
                    <img src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940/"/>
                    <img src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940/"/>
                </div>

                <Link to="/Step1">
                    <Button className="custom-button">Get Started! <Glyphicon glyph="chevron-right" /></Button>
                </Link>
            </div>
        )
    }
}

export default Landing;