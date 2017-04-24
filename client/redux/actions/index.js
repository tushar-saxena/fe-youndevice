import $ from 'jquery';
import cookie from 'react-cookie';

import React, { Component } from 'react'
export const loginSuccess = (status) => ({type: 'LOGIN', status});

export const loginError = (status) => ({type: 'LOGGED_FAILED', status});

export const registerSuccess = (data) => ({type: 'REGISTER', data});

export const registerError = (data) =>({type: 'REGISTER_FAILED',data});

export const login = (loginID, password) => dispatch =>
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

export const register = (data) => dispatch => {
	$.ajax({
		type: "POST",
		url: "http://api.youndevice.com/api/v1/user/register",
		data: JSON.stringify(data.user),
		contentType: "application/json",
		success: function (data) {
			if (data) {
				dispatch(registerSuccess(data));
			}
		},
		error: function (error, textStatus, errorThrown) {
			dispatch(registerError(error.responseJSON));

		}
	});
};

