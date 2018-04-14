import React, { Component } from 'react';
import Camera from 'react-camera';

class CameraApp extends Component {

  constructor(props) {
    super(props);
    this.gotPic = this.gotPic.bind(this);
  }

  gotPic(event) {
        if(event.target.files.length == 1 && 
           event.target.files[0].type.indexOf("image/") == 0) {
            // $("#yourimage").attr("src",URL.createObjectURL(event.target.files[0]));
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
    return (
      <div style={style.container}>
        Camera Testing Site

        <label for="takePictureField">Take Picture</label>
        <input type="file" accept="image/*" id="takePictureField" onChange={this.gotPic}/>
        
        <img id="yourimage"></img>

      </div>
    );
  }
}

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

export default CameraApp