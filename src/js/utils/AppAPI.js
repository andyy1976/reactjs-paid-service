import AppActions from '../actions/AppActions.js';

export default {
	recvServices(){
		let services = [];
		$.get('/data/services.json',function(res){
			AppActions.recvServices(res);
		},'json');
	}
}