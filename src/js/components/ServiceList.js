import React,{Component} from 'react';
import AppStore from '../stores/AppStore';
import Header from './Header';
import {
	Container 
} from 'amazeui-touch';

class ServiceList extends Component{
	constructor(props){
		super(props);
		this.state = {
			services: AppStore.getService()
		}
	}
	render(){
		console.log(this.state.services);
		return (<div>
			<Container>
				<Header title="服务列表" />
			</Container>
		</div>);
	}
}

export default ServiceList;