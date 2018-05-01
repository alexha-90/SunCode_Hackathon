import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



class Review extends Component {
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
                    <img src="https://i.imgur.com/qwnY4Tp.png"/>
                </div>

                <div className="directions">
                    <h1>Review &amp; Submit</h1>
                    <h3>Please review this info to make sure it's all good. Then tap Finish!</h3>
                </div>

                <div id="panelContainer">
                    <div className="leftPanel">
                        <div id="reviewHouseImg" class="box">
                            <h4 class="caption">Shade assessment</h4>
                            <img alt="houseImg" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Neutramaxwellhouse.jpg/250px-Neutramaxwellhouse.jpg"/>
                        </div>
                    </div>
                    <div className="rightPanel">
                        <div id="reviewMeterInfo" class="box">
                            <h4 class="caption">Meter Information</h4>
                            <span className="meterConfirm">
                                Silver Springs Networks <span style={{color: 'green'}}>&#x2713;</span>
                            </span>
                            <br/>
                            <span className="meterConfirm">
                                12345678 <span style={{color: 'green'}}>&#x2713;</span>
                            </span>
                        </div>
                        <div id="shadowAsses" class="box">
                            <h4 class="caption">Shade assessment</h4>
                            <img alt="roofTypeConfirm" src="https://i.imgur.com/fv2FCRP.png"/>
                            <img alt="storyTypeConfirm" src="https://i.imgur.com/89E3XEU.png"/>
                            <img alt="pitchTypeConfirm" src="https://i.imgur.com/5ay7MYE.png"/>
                            <img id="topReview" src="https://i.imgur.com/A5OXtRa.pngg"/>
                        </div>
                    </div>
                </div>

                <div className="footerPanel">
                    <Link to="/confirmation">
                        <Button className="custom-button">Finish</Button>
                    </Link>
                </div>

                <br/>
                <br/>

            </div>
        )
    }
}

export default Review;