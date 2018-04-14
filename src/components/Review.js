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
                <div id="reviewHouseImg">
                    <h2>1.</h2>
                    <img alt="houseImg" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Neutramaxwellhouse.jpg/250px-Neutramaxwellhouse.jpg"/>
                </div>

                <div id="reviewMeterInfo">
                    <h2>2.</h2>
                    <span className="meterConfirm">Silver Spring &#x2713;</span>
                </div>



                <Link to="/confirmation">
                    <Button className="custom-button">Submit!</Button>
                </Link>

            </div>
        )
    }
}

export default Review;