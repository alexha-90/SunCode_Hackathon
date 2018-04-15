import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



class Review extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="mainContainer">

                <div className="directions">
                    <h1>Review &amp; Submit</h1>
                    <h3>Please review this info to make sure it's all good. Then tap Submit!</h3>
                </div>

                <div className="leftPanel">
                    <div id="reviewHouseImg">
                        <h2>1.</h2>
                        <img alt="houseImg" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Neutramaxwellhouse.jpg/250px-Neutramaxwellhouse.jpg"/>
                    </div>


                </div>
                <div className="rightPanel">
                    <div id="reviewMeterInfo">
                        <h2>2.</h2>
                        <span className="meterConfirm">
                        Silver Spring <span style={{color: 'green'}}>&#x2713;</span>
                    </span>
                        <span className="meterConfirm">
                        12345678 <span style={{color: 'green'}}>&#x2713;</span>
                    </span>
                    </div>
                </div>

                <br/>
                <br/>

                <div id="reviewRoofType">
                    <h2>3.</h2>
                    <img alt="roofTypeConfirm" src="https://i.imgur.com/fv2FCRP.png"/>
                    <img alt="storyTypeConfirm" src="https://i.imgur.com/89E3XEU.png"/>
                    <img alt="pitchTypeConfirm" src="https://i.imgur.com/5ay7MYE.png"/>
                </div>

                <br/>
                <br/>

                <Link to="/TopDown1">
                    <Button className="custom-button">Continue</Button>
                </Link>

            </div>
        )
    }
}

export default Review;