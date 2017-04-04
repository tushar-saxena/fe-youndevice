import $ from 'jquery'

export default function login(state = false, action) {
	console.log(">>action" ,action);
	switch (action.type) {
		case 'LOGIN':
			var loginAPI = "http://api.youndevice.com/api/v1/login";
			$.post(loginAPI,{ "emailId": "tushar.saxena@tothenew.com",
				"password": "tushar"}).done((data) =>{
				console.log(data);
			     return  true;
			});
		default:
			return state;
	}
}
