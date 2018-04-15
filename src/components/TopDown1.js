import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';



class TopDown1 extends Component {
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
                    <img src="https://i.imgur.com/qwnY4Tp.png"/>
                    <br/>
                </div>


                <div className="directions">
                    <h1>3. Identify roof obstructions</h1>
                    <h3>Tap areas of the roof that may obstruct panel placement.</h3>
                </div>

                <div className="topDownImg">

                    <Link to="/TopDown2">
                        <img alt="checkMarkImg" src="https://i.imgur.com/JslQGtB.jpg"/>
                    </Link>

                </div>

                <br/>
                <br/>


            </div>
        )
    }
}

export default TopDown1;