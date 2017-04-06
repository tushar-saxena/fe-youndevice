import { connect } from 'react-redux'
import { login } from '../redux/actions/index'
import LoginPage from '../components/login'

export default connect(
		(state, ownProps) => ({
			login: state.login
		}),
		{
			onLogin: (loginId, password)=> login(loginId, password)
		}
)(LoginPage)