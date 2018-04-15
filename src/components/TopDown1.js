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
                    <img alt="checkMarkImg" src="https://i.imgur.com/JslQGtB.jpg"/>
                </div>

                <Link to="/TopDown2">
                    <Button className="custom-button">Continue</Button>
                </Link>

                <br/>
                <br/>


            </div>
        )
    }
}

export default TopDown1;