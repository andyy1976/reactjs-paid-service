import React,{Component} from 'react';
import AppStore from '../stores/AppStore.js';
import Header from './Header.js';
import {
	Container 
} from 'amazeui-touch';
import AppAPI from '../utils/AppAPI.js';

function getAppState(){
	return {
		service: AppStore.getService()
	}
}

let id;

class Service extends Component{
	constructor(props){
		super(props);
		id = props.match.params.id;
		this.onChange = this._onChange.bind(this);
	}
	componentWillMount(){
		AppAPI.getService(id);
	}
	componentDidMount(){
		AppStore.addChangeListener(this.onChange);
	}
	componentWillUnmount(){
		AppStore.removeChangeListener(this.onChange);
	}
	render(){
		return (<div>
			<Container>
				<Header title="物业服务" back="true" />
			</Container>
		</div>);
	}
	_onChange(){
		let state = getAppState();
		this.setState(state);
	}
}

export default Service;