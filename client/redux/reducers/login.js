import $ from 'jquery'

export default function login(state = false, action) {
	console.log(">>action", action);
	switch (action.type) {
		case 'LOGIN':
			fetch('http://api.youndevice.com/api/v1/login', {
				method: 'POST',
				mode: 'cors',
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					emailId: "tushar.saxena@tothenew.com",
					password: "tushar"
				}), name: 'register',
				login: 'register'

			}).then(function (response) {
				return true
			}).then(function (body) {
				console.log(body);
			});
			return true;
		default:
			return state;
	}
}
