import React, { Component } from 'react'
export default class RegisterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {

			username: "",
			email: "",
			password: ""
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit=this.onSubmit.bind(this);
	}

	onChange = (e)=> {
		this.setState({[ e.target.name]: e.target.value})
	};
	onSubmit=(e)=>{
		e.preventDefault();
		this.props.register(this.state.username,this.state.password,this.state.email)
	};

	render() {

		const {state: {username,password,email},props:{register}} = this;
		return (
				<form onSubmit={this.onSubmit}>
					<h1>Join Us....... </h1>
					<div className="form-group">
						<label  className="control-label">User Name:</label>
						<input type="text" className="form-control" name="username" value={username}
								onChange={this.onChange}/>
					</div>
					<div className="form-group">
						<label  className="control-label">Email:</label>
						<input type="password" name="email" className="form-control" value={email}
								onChange={this.onChange}/>
					</div>

					<div className="form-group">
						<label  className="control-label">Password:</label>
						<input type="text" className="form-control" name="password"  value={password}
								onChange={this.onChange}/>
					</div>

					<div className="form-group">
						<button className="btn btn-primary">Sign Up</button>
					</div>
				</form>
		);
	}
}
