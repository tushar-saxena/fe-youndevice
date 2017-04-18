import React, { Component } from 'react'
export default
class RegisterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				firstname: "dd",
				lastname: "dd",
				email: "",
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
	onSubmit = (e)=> {
		e.preventDefault();
		this.props.register({
			user: {
				firstname: this.state.firstname,
				lastname: this.state.lastname,
				email: this.state.email,
				password: this.state.password
			}
		})
	};

	render() {

		const {user: {firstname,lastname,email,password}} = this.state;
		return (
				<form onSubmit={this.onSubmit}>
					<h1>Join Us....... </h1>
					<div className="form-group">
						<label  className="control-label">First Name:</label>
						<input type="text" className="form-control" name="firstname" value={firstname}
								onChange={this.onChange}/>
					</div>
					<div className="form-group">
						<label  className="control-label">Last Name:</label>
						<input type="text" className="form-control" name="lastname" value={lastname}
								onChange={this.onChange}/>
					</div>
					<div className="form-group">
						<label  className="control-label">Email:</label>
						<input type="email" name="email" className="form-control" value={email}
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
		register: (user) => dispatch(register(user))
	}
};
const RegisterContainer = connect(
		mapStateToProps,
		mapDispatchToProps
)(RegisterForm);

export default RegisterContainer