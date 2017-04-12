import $ from 'jquery'

export default function register(state = false, action) {
	console.log("Registerererre", action);
	switch (action.type) {
		case 'REGISTER':
			return action.status;
		case 'REGISTER_FAILED':
			return false;
		default:
			return state;
	}
}
