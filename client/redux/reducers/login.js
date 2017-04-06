import $ from 'jquery'

export default function login(state = false, action) {
	console.log(">>action", action);
	switch (action.type) {
		case 'LOGIN':
			return true;
		case 'LOGGED_FAILED':
			return false;
		default:
			return state;
	}
}
