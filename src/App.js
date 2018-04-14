import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Page imports
import Landing from './components/Landing';

import Header from './components/Header';

import Step1 from './components/Step1';
import Step1Photo from './components/Step1Photo';

import Step2 from './components/Step2';
import Step3 from './components/Step3';

import Review from './components/Review';

import Confirmation from './components/Confirmation';

import TopDown1 from './components/TopDown1';
import TopDown2 from './components/TopDown2';

import Footer from './components/Footer';

import CameraApp from './components/CameraApp';
import OtherCameraApp from './components/OtherCameraApp';


// ==========================================================

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
              <Header />
              <Route exact path='/' component={Landing} />
              <Route exact path='/Step1' component={Step1} />
              <Route exact path='/Step1Photo' component={Step1Photo} />
              <Route exact path='/Step2' component={Step2} />
              <Route exact path='/Step3' component={Step3} />
              <Route exact path='/review' component={Review} />
              <Route exact path='/confirmation' component={Confirmation} />

              <Route exact path='/topdown1' component={TopDown1} />
              <Route exact path='/topdown2' component={TopDown2} />

              <Route exact path='/camera' component={CameraApp} />
              <Route exact path='/otherCamera' component={OtherCameraApp} />
              <Footer />
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
