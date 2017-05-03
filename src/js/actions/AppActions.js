import AppDispatcher from '../dispatcher/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';

class AppActionsClass{
	recvServices(services){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.RECV_SERVICES,
			services: services
		});
	}
	recvService(service){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.RECV_SERVICE,
			service: service
		});
	}
};

const AppActions = new AppActionsClass();
export default AppActions;
