//import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';
let _services = [];

class AppStoreClass extends EventEmitter{
	getService(){
		return _services;
	}
}

const AppStore = new AppStoreClass();

export default AppStore;