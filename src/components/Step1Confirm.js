import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Glyphicon } from 'react-bootstrap';
import Steps, { Step } from 'rc-steps';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';



class Step1Confirm extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="mainContainer">
                <div className='step-progress'>
                    <Steps labelPlacement="vertical" current={0}>
                        <Step title="South roof"/>
                        <Step title="C" description="x" />
                        <Step title="D" description="y" />
                        <Step title="E" description="z" />
                    </Steps>
                </div>

                <div className="directions">
                    <h1>Use this photo?</h1>
                    <img alt="verifyImg" id="wholeImg" src="https://pixabay.com/get/ea34b9062afd093ed1584d05fb0938c9bd22ffd41cb3124696f3c07aa7/roof-3189298_1280.jpg"/>
                </div>

                <Link to="/Step1Photo">
                    <Button className="custom-button">Take new photo<Glyphicon glyph="chevron-right" /></Button>
                </Link>

                <Link to="/Step2">
                    <Button className="custom-button">Use this photo<Glyphicon glyph="chevron-right" /></Button>
                </Link>

            </div>
        )
    }
}

export default Step1Confirm;