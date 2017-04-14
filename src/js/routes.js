var React = require('react');
var Route = require('react-router-dom').Route;
var Link = require('react-router-dom').Link;
var App = require('./components/App');
var ServiceList = require('./components/ServiceList');
var Service = require('./components/Service');

module.exports = (
	<div>
		<Link to="/service/1">Service</Link>
		<Route exact path='/' component={ServiceList} />
		<Route path='/service/:id' component={Service} />
	</div>
);

