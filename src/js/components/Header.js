import React,{Component} from 'react';
import { NavBar } from 'amazeui-touch';


let dataAll = {
  title: ''
};

class Header extends Component{
	render(){
    dataAll.title = this.props.title;
		return (
  		<NavBar {...dataAll} amStyle="success" />
		);
	}
}

export default Header;