import React,{Component} from 'react';
import AppStore from '../stores/AppStore';
import Header from './Header';
import {
	Container 
} from 'amazeui-touch';

function getAppState(){
	return {
		services: AppStore.getServices()
	}
}

class ServiceList extends Component{
	constructor(props){
		super(props);
		this.state = getAppState();
	}
	componentDidMount(){
		AppStore.addChangeListener('here',this._onChange.bind(this));
	}
	render(){
		return (<div>
			<Container>
				<Header title="服务列表" />
			</Container>
		</div>);
	}
	_onChange(){
		this.setState(getAppState());
	}
}

export default ServiceList;