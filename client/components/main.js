import React, { Component } from 'react'
import LoginPage from '../containers/login'
import RegisterModalButton from './registerModal.js';

export default class Main extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
				<div>
					<RegisterModalButton className="register-button btn-primary"/>
					<LoginPage/>
				</div>
		)
	}
}