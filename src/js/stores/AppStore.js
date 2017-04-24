import AppDispatcher from '../dispatcher/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';
import {EventEmitter} from 'events';
import Api from '../utils/AppAPI.js';

const CHANGE_EVENT = 'change';
let _services = [];

class AppStoreClass extends EventEmitter{
	getService(){
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
			console.log('recving services...');
			AppStore.setServices(action.services);
			AppStore.emit(CHANGE_EVENT);
		break;
	}
});

export default AppStore;