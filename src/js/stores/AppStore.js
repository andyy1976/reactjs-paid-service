import AppDispatcher from '../dispatcher/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';
import {EventEmitter} from 'events';
import Api from '../utils/AppAPI.js';

const CHANGE_EVENT = 'change';
var _services = [];

class AppStoreClass extends EventEmitter{
	emitChange(){
		this.emit(CHANGE_EVENT);
	}
	addChangeListener(cb){
		this.on('change',cb);
	}
	removeChangeListener(cb){
		this.removeChangeListener('change',cb);
	}
	getServices(){
		return _services;
	}
	setServices(services){
		_services = services;
	}
}

const AppStore = new AppStoreClass();

AppDispatcher.register((payload)=>{
	const action = payload.action;
	switch(action.actionType){
		case AppConstants.RECV_SERVICES:
			//console.log('recving services...',action.services);
			AppStore.setServices(action.services);
			AppStore.emit(CHANGE_EVENT);
		break;
	}
});

export default AppStore;