import AppActions from '../actions/AppActions.js';

export default {
	recvServices(){
		let services = [1,2,3];
		AppActions.recvServices(services);
	}
}