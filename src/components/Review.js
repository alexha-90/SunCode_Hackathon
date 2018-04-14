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



                <Link to="/confirmation">
                    <Button className="custom-button">Submit!</Button>
                </Link>

            </div>
        )
    }
}

export default Review;