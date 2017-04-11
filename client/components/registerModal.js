import React,{Component} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import RegisterForm from './regiter.js';

export default
class RegisterModalButton extends Component {
	constructor() {
		super();
		this.state = {
			showModal: false
		}
		console.log(">>>this.props,",this.props)
		this.openModal = () => {
			console.log(">>>>>>>>>>>>>>>>>>>>.open model")
			this.setState({showModal: true});
		}
		this.closeModal = () => {
			this.setState({showModal: false});
		}
	}


	render() {
		return <a className={this.props.className} onClick={this.openModal}>
      {this.state.showModal ?
		      <RegisterModal onClose={this.closeModal}/>
		      : null}
				Register
		</a>;
	}
}

class RegisterModal extends React.Component {
	constructor() {
		super();
	}

	render() {
		return <ModalContainer onClose={this.props.onClose}>
			<ModalDialog onClose={this.props.onClose} className="example-dialog">
					<RegisterForm/>
			</ModalDialog>
		</ModalContainer>;
	}
}
