import React,{Component} from 'react';
import AppAPI from '../utils/AppAPI.js';
import AppStore from '../stores/AppStore';

//AppAPI.recvServices();

class App extends Component{
	render(){
		return (<div>
			App
			{this.props.children}
		</div>);
	}
}

export default App;
