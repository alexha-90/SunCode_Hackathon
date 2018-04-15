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

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="mainContainer">
                <br/>
                <br/>

                <div className="directions">
                <h1 id="tagline">Home Solar Survey</h1>
                    <h3>Follow these steps to complete the site survey.
                        <br/>
                        We'll guide you through
                        the process from start to finish. Just tap Get Started to begin.
                    </h3>
                </div>

                <br/>
                <br/>


                <div className="imageGallery">
                    <img alt="cam" src="https://i.imgur.com/iN62EmV.png"/>
                    <img alt="meter" src="https://i.imgur.com/JIJDiNv.png "/>
                    <img alt="roof" src="https://i.imgur.com/M2cMYUW.png"/>
                </div>


                <br/>
                <br/>

                <Link to="/Step1">
                    <Button className="custom-button">Get Started! <Glyphicon glyph="chevron-right" /></Button>
                </Link>

            </div>
        )
    }
}

export default Landing;