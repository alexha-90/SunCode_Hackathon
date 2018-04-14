import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Glyphicon } from 'react-bootstrap';
import Steps, { Step } from 'rc-steps';
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
                <div className='step-progress'>
                    <Steps labelPlacement="vertical" current={0}>
                        <Step title="Start"/>
                        <Step title="South roof" />
                        <Step title="C" description="x" />
                        <Step title="D" description="y" />
                        <Step title="E" description="z" />
                    </Steps>
                </div>

                    <h1>Kill the Site Survey</h1>

                    <div className="imageGallery">
                        <img src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940/"/>
                        <img src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940/"/>
                        <img src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940/"/>
                    </div>

                    <Link to="/Step1">
                        <Button bsStyle="success" id="nextButton">Get Started! <Glyphicon glyph="chevron-right" /></Button>
                    </Link>

                    <Link to="/camera">
                        <Button bsStyle="success" id="cameraButton">Test Camera <Glyphicon glyph="chevron-right" /></Button>
                    </Link>

                    <Link to="/otherCamera">
                        <Button bsStyle="success" id="otherCameraButton">Test Other Camera <Glyphicon glyph="chevron-right" /></Button>
                    </Link>
            </div>
        )
    }
}

export default Landing;