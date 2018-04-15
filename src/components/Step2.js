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
                    <br/>
                    <img src="https://i.imgur.com/iMhXJH5.png"/>
                    <br/>
                </div>

                <div className="directions">
                    <h1>2. Enter meter information</h1>
                    <h3>
                        Find the electricity meter and enter the Manufacturer Name and Number.
                    </h3>
                </div>

                <img alt="meter" id="meterImg" src="https://i.imgur.com/l455PjS.png"/>

                <div className="meterTextInfo">
                    <form>
                        <FieldGroup
                            id="formControlsText"
                            type="text"
                            placeholder="Enter meter manufacturer"
                        />
                        <FieldGroup
                            id="formControlsText"
                            type="number"
                            placeholder="Enter meter number"
                        />
                    </form>
                </div>

                <br/>

                <Link to="/Step3">
                    <Button className="custom-button">Continue<Glyphicon glyph="chevron-right" /></Button>
                </Link>
                <br/>
                <br/>

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