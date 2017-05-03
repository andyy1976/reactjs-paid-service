import AppActions from '../actions/AppActions.js';

export default {
	recvServices(){
		$.get('/data/services.json',function(res){
			AppActions.recvServices(res);
		},'json');
	},
	getService(id){
		$.get('/data/service-'+id+'.json',function(res){
			AppActions.recvService(res);
		},'json');
	}
}