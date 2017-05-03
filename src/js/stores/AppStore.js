import AppDispatcher from '../dispatcher/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';
import {EventEmitter} from 'events';
import Api from '../utils/AppAPI.js';

const CHANGE_EVENT = 'change';
var _services = [];
var _service = {};

class AppStoreClass extends EventEmitter{
	emitChange(){
		this.emit(CHANGE_EVENT);
	}
	addChangeListener(cb){
		this.on('change',cb);
	}
	removeChangeListener(cb){
		this.removeListener('change',cb);
	}
	getServices(){
		return _services;
	}
	setServices(services){
		_services = services;
	}
	getService(){
		return _service;
	}
	setService(service){
		_service = service;
	}
}

const AppStore = new AppStoreClass();

AppDispatcher.register((payload)=>{
	const action = payload.action;
	switch(action.actionType){
		case AppConstants.RECV_SERVICES:
			AppStore.setServices(action.services);
			AppStore.emit(CHANGE_EVENT);
		break;

		case AppConstants.RECV_SERVICE:
			AppStore.setService(action.service);
			AppStore.emit(CHANGE_EVENT);
		break;
	}
});

export default AppStore;