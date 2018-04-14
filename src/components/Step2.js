import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Glyphicon } from 'react-bootstrap';
import Steps, { Step } from 'rc-steps';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';




class Step2 extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="mainContainer">
                <div className='step-progress'>
                    <Steps labelPlacement="vertical" current={1}>
                        <Step title="South roof"/>
                        <Step title="Meter Info" description="x" />
                        <Step title="D" description="y" />
                        <Step title="E" description="z" />
                    </Steps>
                </div>
                <div className="directions">
                    <h1>Enter meter information</h1>
                    <h3>Go to the south side of the house and take a photo facing away from the house.</h3>
                </div>

                <div className="uploadImageBox">
                    <img style={{marginRight: '10px'}} src="https://png.icons8.com/dotty/100/000000/structural.png" />
                    <img src="https://png.icons8.com/color/100/000000/screenshot.png" />
                </div>

                <div className="lowerBlurb"> {/* not used atm */}
                    <h3>You are facing:</h3>
                    N-W-E-S
                </div>

                <br/>

                <Link to="/Step1Photo">
                    <Button className="custom-button">Take Photo<Glyphicon glyph="chevron-right" /></Button>
                </Link>
            </div>
        )
    }
}

export default Step2