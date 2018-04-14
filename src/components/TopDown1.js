import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';



class TopDown1 extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="mainContainer">

                <div className="directions">
                    <h1>Identify roof obstructions</h1>
                    <h3>Tap areas of the roof that may obstruct panels placement</h3>
                </div>

                <div id="completeImg">
                    <img alt="checkMarkImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/120px-Yes_Check_Circle.svg.png"/>
                </div>

                <Link to="/TopDown2">
                    <Button className="custom-button">Continue</Button>
                </Link>


            </div>
        )
    }
}

export default TopDown1;