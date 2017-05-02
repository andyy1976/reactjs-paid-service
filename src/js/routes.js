import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link} from 'react-router-dom';
import App from './components/App';
import ServiceList from './components/ServiceList';
import Service from './components/Service';

module.exports = (
	<Router>
		<div>
			<Route exact path='/' component={ServiceList} />
			<Route path='/service/:id' component={Service} />
		</div>
	</Router>
);

