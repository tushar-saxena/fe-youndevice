import React, { PropTypes,Component } from 'react'
import {Jumbotron} from 'react-bootstrap';
import {browserHistory,Link } from 'react-router'
import cookie from 'react-cookie'

export default
class Home extends Component {
	constructor(props) {
		super(props);
		this.logout = this.logout.bind(this);
	}

	logout = ()=> {
		cookie.remove('loginToken', {path: '/'});
		browserHistory.push('/')
	};

	render() {
		return (
				<div className="overview-page" key="overview">
					<a className="pull-right btn btn-primary btn-outline btn-rounded" onClick={this.logout}> Logout</a>
					<h2>Home
						<small></small>
					</h2>
					<Jumbotron>
						<h1>Welcome!!!</h1>

						<br />
						<br />
					</Jumbotron>
				</div>
		)
	}
}