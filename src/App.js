import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Page imports
import Landing from './components/Landing';
import About from './components/About';
import CameraApp from './components/CameraApp';


// ==========================================================

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
              {/*add header and footer*/}
              <Route exact path='/' component={Landing} />
              <Route exact path='/about' component={About} />
              <Route exact path='/camera' component={CameraApp} />
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
