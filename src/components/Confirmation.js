import React, { Component } from 'react';
import { Button } from 'react-bootstrap';



class Confirmation extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="mainContainer">

                <div className="directions">
                    <h1>Complete!</h1>
                    <h3>You're all done!</h3>
                </div>

                <div id="completeImg">
                    <img alt="checkMarkImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/120px-Yes_Check_Circle.svg.png"/>
                </div>


                <Button className="custom-button">Hurray!</Button>

            </div>
        )
    }
}

export default Confirmation;