import React,{Component} from 'react';
import {Link} from 'react-router-dom';
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
			<Link to={'/service/'+this.state.id}>
				<List.Item 
					media={<Icon name={this.state.icon} />}
					title={this.state.name}
					subTitle={this.state.desc}
					after={'¥'+this.state.price}
					key={this.state.id}
				/>
			</Link>
		</div>);
	}
}

export default ServiceItem;