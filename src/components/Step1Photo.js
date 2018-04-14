import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Steps, { Step } from 'rc-steps';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';



class Step1Photo extends Component {
    constructor() {
        super();
        this.state = {
            uploadSuccess: false,
            directToStep2: false
        };
        this.onCaptureImg = this.onCaptureImg.bind(this);
    }

    onCaptureImg() {
        // alert('capture image now');
        // this.setState({uploadSuccess: true});
        // setTimeout(() => {
        //     alert(this.state.uploadSuccess);
        //     this.setState({directToStep2: true});
        // }, 500);
    }

    render() {
        if (this.state.directToStep2) {
            return <Redirect push to="/Step1Confirm"/>;
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

                <h1>Photo!</h1>
                <img alt="largeImg" id="wholeImg" src="https://pixabay.com/get/ea34b9062afd093ed1584d05fb0938c9bd22ffd41cb3124696f3c07aa7/roof-3189298_1280.jpg"/>

                <button id="takePicButton" className="custom-button" onClick={this.onCaptureImg}/>
            </div>
        )
    }
}

export default Step1Photo;