import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Step1Confirm extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="mainContainer">
                <div className="directions">
                    <h1>Use this photo?</h1>
                    <img alt="verifyImg" id="wholeImg" src="https://pixabay.com/get/ea34b9062afd093ed1584d05fb0938c9bd22ffd41cb3124696f3c07aa7/roof-3189298_1280.jpg"/>
                </div>

                <Button className="custom-button">Take Photo</Button>
                <Button className="custom-button">Use this photo</Button>

            </div>
        )
    }
}

export default Step1Confirm;