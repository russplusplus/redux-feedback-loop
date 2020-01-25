import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import Page1 from '../Page1/Page1';
import Page2 from '../Page2/Page2';
import Page3 from '../Page3/Page3';
import Page4 from '../Page4/Page4';
import Review from '../Review/Review';
import Success from '../Success/Success';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Page1}></Route>
          <Route path="/page2" component={Page2}></Route>
          <Route path="/page3" component={Page3}></Route>
          <Route path="/page4" component={Page4}></Route>
          <Route path="/review" component={Review}></Route>
          <Route path="/success" component={Success}></Route>
        </Router>
        <br/>
      </div>
    );
  }
}

export default App;
