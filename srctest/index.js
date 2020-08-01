import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../src/home';

ReactDOM.render(
	<Router>
	  <main>
		  <Route exact path='/' component={Home}/>
	  </main>
	</Router>
, document.getElementById('root'));