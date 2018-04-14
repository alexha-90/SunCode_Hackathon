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
                    <img alt="checkMarkImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/120px-Yes_Check_Circle.svg.png"/>
                </div>


            </div>
        )
    }
}

export default TopDown2;