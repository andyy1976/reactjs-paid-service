import React from 'react';
import {Route,Link} from 'react-router-dom';
import App from './components/App';
import ServiceList from './components/ServiceList';
import Service from './components/Service';

module.exports = (
	<div>
		<Route exact path='/' component={ServiceList} />
		<Route path='/service/:id' component={Service} />
	</div>
);

