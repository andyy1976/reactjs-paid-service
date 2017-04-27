import React,{Component} from 'react';
import {
	List,
	Icon
}from 'amazeui-touch';

class ServiceItem extends Component{
	constructor(props){
		super(props);
		this.state = props.item;
	}
	render(){
		console.log(this.state);
		return (<div>
			<List.Item 
				media={<Icon name={this.state.icon} />}
				title={this.state.name}
				subTitle={this.state.desc}
				after={'¥'+this.state.price}
				href={'/#/service/'+this.state.id}
				key={this.state.id}
			/>
		</div>);
	}
}

export default ServiceItem;