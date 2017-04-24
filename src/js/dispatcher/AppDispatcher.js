import {Dispatcher} from 'flux';

class DispatcherClass extends Dispatcher{
	handleViewAction(action){
		let payload = {
			source: 'VIEW_ACTION',
			action: action
		}
		this.dispatch(payload);
	}
}

const AppDispatcher = new DispatcherClass();

export default AppDispatcher;