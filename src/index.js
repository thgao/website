import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import {HashRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Digital from './Digital';
import Traditional from './Traditional';
import Photography from './Photography';
import withTracker from './withTracker';

ReactDOM.render(
  <Router hashType="noslash">
	  <main>
		  <Route exact path='/' component={withTracker(Home)}/>
      <Route exact path='/traditional' component={withTracker(Traditional)}/>
      <Route exact path='/digital' component={withTracker(Digital)}/>
      <Route exact path='/photography' component={withTracker(Photography)}/>
	  </main>
	</Router>,
  document.getElementById('root')
);
