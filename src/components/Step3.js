import React, { Component } from 'react';
import { Form, Button, Radio, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Steps, { Step } from 'rc-steps';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';




class Step3 extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="mainContainer">
                <div className='step-progress'>
                    <br/>
                    <img src="https://i.imgur.com/qwnY4Tp.png"/>
                    <br/>
                </div>

                <div className="directions">
                    <h1>3. Select Roof Details</h1>
                </div>

                <div className="roofTypeImages">
                    <Form>
                        <h3>What material is the roof made of?</h3>
                        <div className="roof">
                            <img alt="roofType1" src="https://i.imgur.com/fv2FCRP.png"/>
                            <Radio name="radioGroup" />
                        </div>
                        <div className="roof">
                            <img alt="roofType2" src="https://i.imgur.com/BjyIPdh.png"/>
                            <Radio name="radioGroup" />
                        </div>
                        <div className="roof">
                            <img alt="roofType3" src="https://i.imgur.com/y6iBMTp.png"/>
                            <Radio name="radioGroup" />
                        </div>

                        <h3>How many stories in this building?</h3>
                        <div className="roof">
                            <img alt="storyType1" src="https://i.imgur.com/uKPjfRg.png"/>
                            <Radio name="houseFloors" />
                        </div>
                        <div className="roof">
                            <img alt="storyType2" src="https://i.imgur.com/89E3XEU.png"/>
                            <Radio name="houseFloors" />
                        </div>
                        <div className="roof">
                            <img alt="storyType3" src="https://i.imgur.com/viXxGu6.png"/>
                            <Radio name="houseFloors" />
                        </div>


                        <h3>What is the estimated pitch of the roof?</h3>
                        <div className="roof">
                            <img alt="pitchType1" src="https://i.imgur.com/zKqH16I.png"/>
                            <Radio name="roofPitch" />
                        </div>
                        <div className="roof">
                            <img alt="pitchType2" src="https://i.imgur.com/Mzjd2t7.png"/>
                            <Radio name="roofPitch" />
                        </div>
                        <div className="roof">
                            <img alt="pitchType3" src="https://i.imgur.com/5ay7MYE.png"/>
                            <Radio name="roofPitch" />
                        </div>
                    </Form>

                    <br/>

                    <Link to="/TopDown1">
                        <Button className="custom-button">Continue<Glyphicon glyph="chevron-right" /></Button>
                    </Link>

                    <br/>
                    <br/>
                </div>
            </div>
        )
    }
}

export default Step3;