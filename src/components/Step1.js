import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import Steps, { Step } from 'rc-steps';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';



class Step1 extends Component {
    constructor() {
        super();this.state = {
            directToStep2: false
        };
        this.gotPic = this.gotPic.bind(this);
        this.clicked = this.clicked.bind(this);
    }

    gotPic(event) {
        if(event.target.files.length === 1 &&
           event.target.files[0].type.indexOf("image/") === 0) {
            // console.log(event.target.files[0]);
            // console.log(event.target.result);
            // console.log(event);
            // this.setState({imageSuccess: true, filePath: event.target.files[0]})
            // window.ridirect
            this.setState({directToStep2: true});

        }
    }

    clicked() {
        // window.getelement().click()
    }


    render() {
        if (this.state.directToStep2) {
            return <Redirect push to="/Step2"/>;
        }
        return (

            <div className="mainContainer">
                <div className='step-progress'>
                    <Steps labelPlacement="vertical" current={0}>
                        <Step title="South roof"/>
                        <Step title="C" description="x" />
                        <Step title="D" description="y" />
                        <Step title="E" description="z" />
                    </Steps>
                </div>
                <div className="directions">
                    <h1>Take a photo facing south</h1>
                    <h3>Go to the south side of the house and take a photo facing away from the house.</h3>
                </div>

                <div className="uploadImageBox">
                    <img src="https://png.icons8.com/dotty/100/000000/structural.png" alt="" />
                    <img src="https://png.icons8.com/color/100/000000/screenshot.png" alt="" />
                </div>

                <div className="lowerBlurb"> {/* not used atm */}
                    <h3>You are facing:</h3>
                    N-W-E-S
                </div>

                <br/>

                <Button className="custom-button" onClick={this.clicked}>Take Photo<Glyphicon glyph="chevron-right" /></Button>


                <input type="file" accept="image/*" id="takePictureField" onChange={this.gotPic} style={{height: '150px'}}/>


            </div>
        )
    }
}

export default Step1;