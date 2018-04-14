import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Page imports
import Landing from './components/Landing';
import About from './components/About';


// ==========================================================

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
              {/*add header and footer*/}
              <Route exact path='/' component={Landing} />
              <Route exact path='/about' component={About} />
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
