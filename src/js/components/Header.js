import React,{Component} from 'react';
import { NavBar } from 'amazeui-touch';

const itemLeft = {
	href: 'javascript:window.history.go(-1);',
	title: '返回',
};

const dataAll = {
  title: '',
  leftNav: []
};

class Header extends Component{
	render(){
    dataAll.title = this.props.title;
    if(this.props.back){
    	 dataAll.leftNav = [{...itemLeft}]
    }
    else{
    	dataAll.leftNav = [];
    }
	return (
  		<NavBar {...dataAll} amStyle="success" />
		);
	}
}

export default Header;