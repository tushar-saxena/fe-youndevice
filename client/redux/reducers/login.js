export default function login(state = false, action) {
	console.log(">>action" ,action);
	switch (action.type) {
		case 'LOGIN':
			return  true;

		default:
			return state;
	}
}
