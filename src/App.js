import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Page imports
import Landing from './components/Landing';
import Step1 from './components/Step1';
import Step1Photo from './components/Step1Photo';
import Step1Confirm from './components/Step1Confirm';
import CameraApp from './components/CameraApp';


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

              <Route exact path='/camera' component={CameraApp} />
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
