import $ from 'jquery'

export default function register(state={status:false,message:""}, action) {
	console.log("Registerererre", action);
	switch (action.type) {
		case 'REGISTER':
			return {status:action.status,message:action.message};
		case 'REGISTER_FAILED':
			return {status:action.status,message:action.message};
		default:
			return state;
	}
}
