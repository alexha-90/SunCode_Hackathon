import React, { Component } from 'react';
import Camera from 'react-camera';

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
            this.setState({imageSuccess: true, filePath: event.target.files[0]})
            // $("#yourimage").attr("src",URL.createObjectURL(event.target.files[0]));
        }
  }

  showImage() {
    if (this.state.imageSuccess) {
      return (
          <img src={this.state.filePath} alt="img" />
      )
    }
  }

  // takePicture() {
  //   this.camera.capture()
  //   .then(blob => {
  //     this.img.src = URL.createObjectURL(blob);
  //     this.img.onload = () => { URL.revokeObjectURL(this.src); }
  //   })
  // }


  render() {
      const style = {
          yourimage: {
              width: '100%',
          },
          preview: {
              position: 'relative',
          },
          captureContainer: {
              display: 'flex',
              position: 'absolute',
              justifyContent: 'center',
              zIndex: 1,
              bottom: 0,
              width: '100%'
          },
          captureButton: {
              backgroundColor: '#fff',
              borderRadius: '50%',
              height: 56,
              width: 56,
              color: '#000',
              margin: 20
          },
          captureImage: {
              width: '100%',
          }
      };

    return (
      <div style={style.container}>
        Camera Testing Site


          {this.showImage()}

        <label htmlFor="takePictureField">Take Picture</label>
        <input type="file" accept="image/*" id="takePictureField" onChange={this.gotPic}/>

        <img id="yourimage"></img>

      </div>
    );
  }
}


export default CameraApp