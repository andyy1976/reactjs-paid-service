import React,{Component} from 'react';
import AppStore from '../stores/AppStore.js';
import Header from './Header.js';
import {
	Group,
	Card,
	List,
  	Field,
  	Button,
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
		console.log('here',this.state, this.state === null );
		let content = '';
		if( this.state !== null){
			content = this.state.service.name + '<br/>'
				+ this.state.service.desc + '<br/>'
				+ '¥' + this.state.service.price;
		}
		return (<div>
			<Container>
				<Header title="物业服务" back="true" />

				<Card title="服务项目">
		         	<div dangerouslySetInnerHTML={{__html: content}}>
		         	</div>
		        </Card>


		        <Card title="联系信息">
		        	<List>
			        	 <List.Item
		                  key={0}
		                  nested="input"
		                >
			        		<Field 
			        			label="姓名"
			        			type="text"
			        			defaultValue="张三"
			        		/>
			        	</List.Item>
			        	<List.Item
		                  key={1}
		                  nested="input"
		                >
			        		<Field 
			        			label="电话"
			        			type="text"
			        			defaultValue="1388888888"
			        		/>
			        	</List.Item>
			        	<List.Item
		                  key={2}
		                  nested="input"
		                >
			        		<Field 
			        			label="需求"
			        			type="textarea"
			        			placeholder="请填写您的要求或说明"
			        		/>
			        	</List.Item>
			        	<List.Item
		                  key={3}
		                >
		                	<Field
					            value="提交"
					            type="submit"
					            amStyle="success"
					            block
					            onClick={this.handleSubmit}
					          />
		                </List.Item>
		        	</List>
	        	</Card>
			</Container>
		</div>);
	}
	_onChange(){
		let state = getAppState();
		this.setState(state);
	}
	handleSubmit(){
		console.log('submit');
	}
}

export default Service;