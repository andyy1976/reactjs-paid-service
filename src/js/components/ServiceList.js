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
		AppStore.addChangeListener(this._onChange.bind(this));
	}
	componentUnmount(){
		AppStore.removeChangeListener(this._onChange);
	}
	render(){
		//console.log(this.state.services);
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