import $ from 'jquery'
import cookie from 'react-cookie'
export const loginSuccess = (status) => {
	return ({type: 'LOGIN', status})
};
export const registerSuccess = (status) => {
	return ({type: 'REGISTER', status})
};
export const registerError = () => {
	return ({type: 'REGISTER_FAILED'});
};
export const login = (loginID, password) => {
	return dispatch =>
			fetch('http://api.youndevice.com/api/v1/login', {
				method: 'POST',
				body: JSON.stringify({
					emailId: loginID,
					password: password
				})
			}).then(response => {
				if (response.type === 'opaque') {
					console.log('Received a response, but it\'s opaque so can\'t examine it');
					return;
				}
				if (response.status == 200) {
					response.json().then(function (json) {
						cookie.save('loginToken', json.data && json.data["X-AUTH-TOKEN"], {path: '/'});
						dispatch(loginSuccess(json.status));
					});
				} else {
					const error = new Error(response.status);
					error.response = response;
					dispatch(loginError(error));
					throw error;
				}
			}).catch(error => {
				console.log('request failed', error);
			});
};
export const register = (data) => {
	return dispatch => {
		console.log(">>>>>>>....insidebebebeb")
		fetch('http://api.youndevice.com/api/v1/user/register', {
			method: 'POST',
			body: JSON.stringify(data.user)
		}).then(response => {
			if (response.type === 'opaque') {
				console.log('Received a response, but it\'s opaque so can\'t examine it');
				return;
			}
			if (response.status == 200) {
				response.json().then(function (json) {
					console.log("RSPONESE",json)
					dispatch(registerSuccess(json.status));
				});
			} else {
				const error = new Error(response.status);
				error.response = response;
				dispatch(registerError(error));
				throw error;
			}
		}).catch(error => {
			console.log('request failed', error);
		});
	}
};

