var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router-dom').BrowserRouter;
var routes = require('./routes.js');

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'));


