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
		if (isAuthenticated) {
			browserHistory.push('/home')
		} else {
			this.setState({errorMessage: "Wrong id or password"})
		}
	}
	onSubmit = (e)=> {
		e.preventDefault();
		this.props.onRegister({
			user: this.state.user
		})
	};

	render() {

		const {user: {firstName,lastName,emailId,password}} = this.state;
		return (
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
		);
	}
}
import { connect } from 'react-redux'
import { register } from '../redux/actions/index'
const mapStateToProps = (state, ownProps) => {
	return {
		register: state.register
	}
};
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onRegister: (user) => dispatch(register(user))
	}
};
const RegisterContainer = connect(
		mapStateToProps,
		mapDispatchToProps
)(RegisterForm);

export default RegisterContainer