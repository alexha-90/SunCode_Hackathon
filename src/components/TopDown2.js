import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


class TopDown2 extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="mainContainer">

                <div className="directions">
                    <h1>(cont...) Identify roof obstructions</h1>
                    <h3>Tap areas of the roof that may obstruct panels placement</h3>
                </div>

                <div id="completeImg">
                    <img alt="checkMarkImg" src="https://i.imgur.com/A5OXtRa.png"/>
                </div>

                <Link to="/confirmation">
                    <Button className="custom-button">Submit!</Button>
                </Link>


            </div>
        )
    }
}

export default TopDown2;