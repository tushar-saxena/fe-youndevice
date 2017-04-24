import $ from 'jquery'

export default function register(state={status:false,message:""}, action) {
	console.log("Registerererre", action);
	switch (action.type) {
		case 'REGISTER':
			return {status:action.data.status,message:action.data.message};
		case 'REGISTER_FAILED':
			return {status:action.data.status,message:action.data && action.data.errors[0] && action.data.errors[0].errorMessage};
		default:
			return state;
	}
}
