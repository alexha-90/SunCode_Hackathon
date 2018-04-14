import React, { Component } from 'react';
import { Form, Button, Radio } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Steps, { Step } from 'rc-steps';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';




class Step3 extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="mainContainer">
                <div className='step-progress'>
                    <Steps labelPlacement="vertical" current={2}>
                        <Step title="1" description="tbd" />
                        <Step title="2" description="meter info" />
                        <Step title="3" description="Roof details" />
                        <Step title="E" description="z" />
                    </Steps>
                </div>

                <div className="directions">
                    <h1>3. Select Roof Details</h1>
                </div>

                <div className="roofTypeImages">
                    <h3>What type of roof does this house have?</h3>
                    <Form>
                        <div className="roof">
                            <img alt="roofType1" src="https://www.woodworkingnetwork.com/sites/woodworking/files/styles/slideshow_thumbnail/public/glass%20balcony%20roof%20terrace%20with%20composite%20decking_0.png?itok=qCq3eJOH"/>
                            <Radio name="radioGroup" />
                        </div>
                        <div className="roof">
                            <img alt="roofType2" src="https://www.woodworkingnetwork.com/sites/woodworking/files/styles/slideshow_thumbnail/public/glass%20balcony%20roof%20terrace%20with%20composite%20decking_0.png?itok=qCq3eJOH"/>
                            <Radio name="radioGroup" />
                        </div>
                        <div className="roof">
                            <img alt="roofType3" src="https://www.woodworkingnetwork.com/sites/woodworking/files/styles/slideshow_thumbnail/public/glass%20balcony%20roof%20terrace%20with%20composite%20decking_0.png?itok=qCq3eJOH"/>
                            <Radio name="radioGroup" />
                        </div>
                    </Form>


                    {/*<div>*/}
                        {/*<img alt="roofType1" src="https://www.woodworkingnetwork.com/sites/woodworking/files/styles/slideshow_thumbnail/public/glass%20balcony%20roof%20terrace%20with%20composite%20decking_0.png?itok=qCq3eJOH"/>*/}
                        {/*<Form>*/}
                            {/*<Radio/>*/}
                        {/*</Form>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                        {/*<img alt="roofType1" src="https://www.woodworkingnetwork.com/sites/woodworking/files/styles/slideshow_thumbnail/public/glass%20balcony%20roof%20terrace%20with%20composite%20decking_0.png?itok=qCq3eJOH"/>*/}
                        {/*<Form>*/}
                            {/*<Radio/>*/}
                        {/*</Form>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                        {/*<img alt="roofType1" src="https://www.woodworkingnetwork.com/sites/woodworking/files/styles/slideshow_thumbnail/public/glass%20balcony%20roof%20terrace%20with%20composite%20decking_0.png?itok=qCq3eJOH"/>*/}
                        {/*<Form>*/}
                            {/*<Radio/>*/}
                        {/*</Form>*/}
                    {/*</div>*/}
                </div>

            </div>
        )
    }
}

export default Step3;