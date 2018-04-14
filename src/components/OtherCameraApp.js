import React, { Component } from 'react';

class CameraApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
        imageSuccess: false,
        filePath: ''

    };

    this.gotPic = this.gotPic.bind(this);
    this.showImage = this.showImage.bind(this);
  }

  gotPic(event) {
        if(event.target.files.length === 1 &&
           event.target.files[0].type.indexOf("image/") === 0) {
            console.log(event.target.files[0]);
            console.log(event.target.result);
            console.log(event);
            this.setState({imageSuccess: true, filePath: event.target.files[0]});
            // $("#yourimage").attr("src",URL.createObjectURL(event.target.files[0]));
        }
  }

  showImage() {
    if (this.state.imageSuccess) {
      return (
          <img src={window.URL.createObjectURL(this.state.filePath)} width="200px" height="200px" alt="img" />
      )
    }
  }

  render() {
    const style = {
      yourimage: {
        width: '200px',
      },
      takePictureField: {
        width: '100%',
      }
    };


    return (
      <div style={style.container}>
        Camera Testing Site
        <br />
        {this.showImage()}
        <br />
        <label htmlFor="takePictureField">Take Picture</label>
        <br />
        <input type="file" name="Foo" accept="image/*" id="takePictureField" onChange={this.gotPic}/>

        <img id="yourimage" alt="Your Image Here"></img>

      </div>
    );
  }
}

export default CameraApp