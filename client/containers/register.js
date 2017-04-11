import { connect } from 'react-redux'
import { register } from '../redux/actions/index'
import RegisterForm from '../components/regiter'

export default connect(
		{
			register: (username, password, email)=> register(username, password, email)
		}
)(RegisterForm)
