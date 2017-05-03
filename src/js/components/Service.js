import React,{Component} from 'react';
import AppStore from '../stores/AppStore.js';
import Header from './Header.js';
import {
	Container 
} from 'amazeui-touch';

function getServiceDetail(props){
	let id = props.match.params.id;
	console.log('id',id);
	return {};
}

class Service extends Component{
	constructor(props){
		super(props);
		this.state = getServiceDetail(props);
	}
	render(){
		return (<div>
			<Container>
				<Header title="物业服务" back="true" />
			</Container>
		</div>);
	}
}

export default Service;