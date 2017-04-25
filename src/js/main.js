import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router} from 'react-router-dom';
import routes from './routes.js';
import AppStore from './stores/AppStore.js';
import AppAPI from './utils/AppAPI.js';

AppAPI.recvServices();

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'));


