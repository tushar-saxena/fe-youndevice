import React, { Component } from 'react'
import LoginPage from '../containers/login'

export default class Main extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
				<div>
					<h1>Connecto</h1>
					<LoginPage/>
				</div>
		)
	}
}