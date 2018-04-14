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
                    <br/>
                    <img src="https://i.imgur.com/OpyekOs.png"/>
                    <br/>
                </div>

                <div className="directions">
                    <h1>3. Select Roof Details</h1>
                </div>

                <div className="roofTypeImages">
                    <Form>
                        <h3>What type of roof does this house have?</h3>
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

                        <h3>How many stories in this building?</h3>
                        <div className="roof">
                            <img alt="storyType1" src="https://chambermaster.blob.core.windows.net/images/members/882/53/MemLogoSearch_Shoreline%20Construction.jpg"/>
                            <Radio name="houseFloors" />
                        </div>
                        <div className="roof">
                            <img alt="storyType2" src="https://chambermaster.blob.core.windows.net/images/members/882/53/MemLogoSearch_Shoreline%20Construction.jpg"/>
                            <Radio name="houseFloors" />
                        </div>
                        <div className="roof">
                            <img alt="storyType3" src="https://chambermaster.blob.core.windows.net/images/members/882/53/MemLogoSearch_Shoreline%20Construction.jpg"/>
                            <Radio name="houseFloors" />
                        </div>

                        <h3>What is the estimated pitch of the roof?</h3>
                        <div className="roof">
                            <img alt="pitchType1" src="https://chambermaster.blob.core.windows.net/images/members/882/53/MemLogoSearch_Shoreline%20Construction.jpg"/>
                            <Radio name="roofPitch" />
                        </div>
                        <div className="roof">
                            <img alt="pitchType2" src="https://chambermaster.blob.core.windows.net/images/members/882/53/MemLogoSearch_Shoreline%20Construction.jpg"/>
                            <Radio name="roofPitch" />
                        </div>
                        <div className="roof">
                            <img alt="pitchType3" src="https://chambermaster.blob.core.windows.net/images/members/882/53/MemLogoSearch_Shoreline%20Construction.jpg"/>
                            <Radio name="roofPitch" />
                        </div>
                    </Form>

                    <br/>

                    <Link to="/review">
                        <Button className="custom-button">Proceed</Button>
                    </Link>

                    <br/>
                    <br/>
                </div>
            </div>
        )
    }
}

export default Step3;