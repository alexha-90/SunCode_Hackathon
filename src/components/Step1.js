import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';


class Step1 extends Component {
    constructor() {
        super();this.state = {
            directToStep2: false
        };
        this.gotPic = this.gotPic.bind(this);
        // this.clicked = this.clicked.bind(this);
        // this.clickInput = this.clickInput.bind(this);
    }

    componentWillMount() {
        window.scrollTo(0, 0);
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

    // clicked() {
    //     // window.getelement().click()
    //     console.log(this.refs.clickInput);
    //     console.log(this.refs.takePictureField);
    //     // this.refs.clickInput.click();
    // }

    // clickInput(el) {
    //     // el.onClick()
    //     console.log(el);
    // }


    render() {
        if (this.state.directToStep2) {
            return <Redirect push to="/Step2"/>;
        }
        return (

            <div className="mainContainer">

                <div className='step-progress'>
                    <img src="https://i.imgur.com/2Rz7DnT.png"/>
                </div>



                <div className="directions">
                    <h1>Take a photo facing south</h1>
                    <h3>
                        Stand of the south side of the house and face away from the house.
                        <br/>
                        Photograph any trees or obstructions that might shade the roof.
                    </h3>
                </div>

                {/*<div className="uploadImageBox">*/}
                    {/*<img src="https://png.icons8.com/dotty/100/000000/structural.png" alt="" />*/}
                    {/*<img src="https://png.icons8.com/color/100/000000/screenshot.png" alt="" />*/}
                {/*</div>*/}

                <img id="navImg" alt="navDirection" src="https://i.imgur.com/1qwxybV.png" />

                {/*<div className="lowerBlurb"> /!* not used atm *!/*/}
                    {/*<h3>You are facing:</h3>*/}
                    {/*N-W-E-S*/}
                {/*</div>*/}

                <br/>
                <br/>

                <div class="btn-wrapper">
                  <Button className="custom-button">Take Photo<Glyphicon glyph="chevron-right" /></Button>
                  <input type="file" name="myfile" accept="image/*" id="takePictureField" onChange={this.gotPic}/>
                </div>


            </div>
        )
    }
}

export default Step1;