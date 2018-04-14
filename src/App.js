import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Page imports
import Landing from './components/Landing';

import Step1 from './components/Step1';
import Step1Photo from './components/Step1Photo';
import Step1Confirm from './components/Step1Confirm';

import Step2 from './components/Step2';

import Step3 from './components/Step3';

import CameraApp from './components/CameraApp';
import OtherCameraApp from './components/OtherCameraApp';


// ==========================================================

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
              {/*add header and footer if have time*/}
              <Route exact path='/' component={Landing} />
              <Route exact path='/Step1' component={Step1} />
              <Route exact path='/Step1Photo' component={Step1Photo} />
              <Route exact path='/Step1Confirm' component={Step1Confirm} />

              <Route exact path='/Step2' component={Step2} />

              <Route exact path='/Step3' component={Step3} />

              <Route exact path='/camera' component={CameraApp} />
              <Route exact path='/otherCamera' component={OtherCameraApp} />
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
