import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Digital from './components/pages/Digital';
import Traditional from './components/pages/Traditional';
import Photography from './components/pages/Photography';
import withTracker from './components/withTracker';

ReactDOM.render(
  <Router>
	  <main>
		  <Route basename="/website" exact path='/' component={withTracker(Home)}/>
      <Route basename="/website" exact path='/traditional' component={withTracker(Traditional)}/>
      <Route basename="/website" exact path='/digital' component={withTracker(Digital)}/>
      <Route basename="/website" exact path='/photography' component={withTracker(Photography)}/>
	  </main>
	</Router>,
  document.getElementById('root')
);
