import { connect } from 'react-redux'
import RegisterForm from '../components/register'
import { register } from '../redux/actions/index'
const RegisterPage = connect(
		(state, ownProps) => ({
			register: state.register
		}),
		{
			onRegister: (user) => register(user)
		}
)(RegisterForm);

export default RegisterPage