import Router from 'react-router';
import {Panel, Input, Button} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React, { Component } from 'react'
import {browserHistory } from 'react-router'

import {pushState} from 'react-router-redux';
export default
class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {loginID: 'tushar.saxena@tothenew.com', password: 'tushar',errorMessage:""}
	}

	componentWillReceiveProps(nextProps) {
		this.checkAuth(nextProps.login);
	}

	checkAuth(isAuthenticated) {
		if (isAuthenticated) {
			browserHistory.push('/home')
		} else {
			this.setState({errorMessage: "Wrong id or password"})
		}
	}

	render() {
		const {state: {loginID,password,errorMessage},props: {login,onLogin}} = this;
		return (
				<div className="login-page ng-scope ui-view">
					<div className="row">
						<div className="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4">
							<img src={require("../common/images/flat-avatar.png")} className="user-avatar" />
							<h1>YOU N DEVICE
								<small></small>
							</h1>
							<span>{errorMessage}
							</span>
							<div className="form-content">
								<div className="form-group">
									<input type="text" className="form-control input-underline input-lg" value={loginID}
											onChange={(e)=>this.setState({loginID: e.target.value})}
											placeholder="Email" />
								</div>
								<div className="form-group">
									<input type="password" className="form-control input-underline input-lg" value={password}
											onChange={(e)=>this.setState({password: e.target.value})} placeholder="Password" />
								</div>
							</div>
							<button className="btn btn-white btn-outline btn-lg btn-rounded" onClick={() =>onLogin(loginID, password)}>Login</button>
						</div>
					</div>
				</div>
		);
	}
}
