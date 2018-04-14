import React, { Component } from 'react';
import Steps, { Step } from 'rc-steps';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import { Button } from 'react-bootstrap';


class Step1 extends Component {
    constructor() {
        super();
        this.onUpload = this.onUpload.bind(this);
    }

    onUpload() {
        alert('upload a pic!');
    }

    render() {
        return (
            <div className="mainContainer">
                <div className='step-progress'>
                    <Steps labelPlacement="vertical" current={1}>
                        <Step title="Start"/>
                        <Step title="South roof" />
                        <Step title="C" description="x" />
                        <Step title="D" description="y" />
                        <Step title="E" description="z" />
                    </Steps>
                </div>
                <div className="directions">
                    <h1>Take a photo facing south</h1>
                    <h3>Go to the south side of the house and take a photo facing away from the house.</h3>
                </div>

                <div className="uploadImageBox" onClick={this.onUpload}>
                    <img style={{marginRight: '10px'}} src="https://png.icons8.com/dotty/100/000000/structural.png" />
                    <img src="https://png.icons8.com/color/100/000000/screenshot.png" />
                </div>

                <div className="lowerBlurb"> {/* not used atm */}
                    <h3>You are facing:</h3>
                    N-W-E-S
                </div>

                <br/>



                    <Button bsStyle="info" id="nextButton">Take Photo</Button>
            </div>
        )
    }
}

export default Step1;