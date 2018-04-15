import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';



class Confirmation extends Component {
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
                    <img src="https://i.imgur.com/OpyekOs.png"/>
                    <br/>
                </div>

                <div className="directions">
                    <h1>Complete!</h1>
                    <h3>You're all done!</h3>
                </div>

                <div id="completeImg">
                    <img alt="checkMarkImg" src="https://i.imgur.com/KltAU4m.png"/>
                </div>

                <Link to="/">
                    <Button className="custom-button">Hurray!</Button>
                </Link>

            </div>
        )
    }
}

export default Confirmation;