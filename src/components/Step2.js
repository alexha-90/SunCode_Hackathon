import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Glyphicon, FormGroup, ControlLabel, HelpBlock, FormControl } from 'react-bootstrap';
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
                    <h3>Find the meter to the south side of the house and take a photo facing away from the house.</h3>
                </div>



                <img alt="meter" id="meterImg" src="https://i.imgur.com/xdiOrGd.png"/>

                <div className="meterTextInfo">
                    <form>
                        <FieldGroup
                            id="formControlsText"
                            type="text"
                            placeholder="Enter meter information"
                        />
                        <FieldGroup
                            id="formControlsText"
                            type="text"
                            placeholder="Enter meter number"
                        />
                    </form>

                </div>


<<<<<<< HEAD
                <Link to="/Step1Photo">
                    <Button className="custom-button">Take Photo<Glyphicon glyph="chevron-right" /></Button>
=======
                <Link to="/Step3">
                    <Button bsStyle="success" id="nextButton">Use this info!</Button>
>>>>>>> ae695f32860db6ad7d8ab0049641e6272edcdf76
                </Link>
            </div>
        )
    }
}

export default Step2

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}