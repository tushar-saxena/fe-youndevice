import React, { Component } from 'react'
import {browserHistory } from 'react-router'
import Router from 'react-router';

import {pushState} from 'react-router-redux';

export default
class RegisterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				firstName: "dd",
				lastName: "dd",
				emailId: "",
				password: ""
			}
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange = (e)=> {
		var user = this.state.user;
		user[e.target.name] = e.target.value;
		this.setState({user: user});
	};
	componentWillReceiveProps(nextProps) {
		this.checkRegister(nextProps.register);
	}

	checkRegister(isAuthenticated) {
		if (isAuthenticated.status) {
			browserHistory.push('/home')
		}
	}
	onSubmit = (e)=> {
		e.preventDefault();
		this.props.onRegister({
			user: this.state.user
		})
	};

	render() {

		const {state:{user: {firstName,lastName,emailId,password}},props:{register:{message}}} = this;
		return (<div>
			<span>{message}
			</span>
				<form onSubmit={this.onSubmit}>
					<h1>Join Us....... </h1>
					<div className="form-group">
						<label  className="control-label">First Name:</label>
						<input type="text" className="form-control" name="firstName" value={firstName}
								onChange={this.onChange}/>
					</div>
					<div className="form-group">
						<label  className="control-label">Last Name:</label>
						<input type="text" className="form-control" name="lastName" value={lastName}
								onChange={this.onChange}/>
					</div>
					<div className="form-group">
						<label  className="control-label">Email:</label>
						<input type="email" name="emailId" className="form-control" value={emailId}
								onChange={this.onChange}/>
					</div>

					<div className="form-group">
						<label  className="control-label">Password:</label>
						<input type="password" className="form-control" name="password"  value={password}
								onChange={this.onChange}/>
					</div>

					<div className="form-group">
						<button className="btn btn-primary">Sign Up</button>
					</div>
				</form>
				</div>
		);
	}
}
