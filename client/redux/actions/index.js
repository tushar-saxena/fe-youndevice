import $ from 'jquery'
export const loginSuccess = (loginID, password) => {
	return ({type: 'LOGIN', loginID, password})
};
export const loginError = (error) => {
	return ({error, type: 'LOGGED_FAILED'});
};


export const login = (loginID, password) => {
	return dispatch =>
			fetch('http://api.youndevice.com/api/v1/login', {
				method: 'POST',
				mode: 'no-cors',

				body: JSON.stringify({
					emailId: "tushar.saxena@tothenew.com",
					password: "tushar"
				})
			}).then(response => {
				console.log(response)
				if (response.status >= 200 && response.status < 300) {
					console.log(response);
					dispatch(loginSuccess(response));
				} else {
					const error = new Error(response.statusText);
					error.response = response;
					dispatch(loginError(error));
					throw error;
				}
			}).catch(error => {
				console.log('request failed', error);
			});
};
