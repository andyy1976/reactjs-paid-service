import AppDispatcher from '../dispatcher/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';

class AppActionsClass{
	recvServices(services){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.RECV_SERVICES,
			services: services
		});
	}
};

const AppActions = new AppActionsClass();
export default AppActions;
