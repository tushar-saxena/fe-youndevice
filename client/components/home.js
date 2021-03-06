import React, { PropTypes,Component } from 'react'
import {Jumbotron} from 'react-bootstrap';
import {browserHistory,Link } from 'react-router'

export default class Home extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		console.log(this.props);
		return (
				<div className="overview-page" key="overview">
					<Link to="/dashboard/reports" className="pull-right btn btn-primary btn-outline btn-rounded">Reports</Link>
					<h2>Home <small></small></h2>
					<Jumbotron>
						<h1>Welcome!</h1>!
						<br /><br />
					</Jumbotron>
				</div>
		)
	}
}