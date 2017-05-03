import React,{Component} from 'react';
import AppStore from '../stores/AppStore';
import Header from './Header.js';
import ServiceGroup from './ServiceGroup.js';
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
		this.onChange = this._onChange.bind(this);
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
				<Header title="服务列表" />
				{
					this.state.services.map((grp,idx)=>{
						return <ServiceGroup group={grp} key={idx} />
					})
				}
			</Container>
		</div>);
	}
	_onChange(){
		let state = getAppState();
		this.setState(state);
	}
}

export default ServiceList;