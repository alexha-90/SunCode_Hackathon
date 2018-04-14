import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Page imports
import Landing from './components/Landing';
import Step1 from './components/Step1';
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
              <Route exact path='/camera' component={CameraApp} />
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
