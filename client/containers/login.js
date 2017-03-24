import { connect } from 'react-redux'
import { handleLogin } from '../redux/actions/index'
import LoginPage from '../components/login'

export default connect(
		(state, ownProps) => ({
			login: state.login
		}),
		{
			onLogin: (loginId, password)=> handleLogin(loginId, password)
		}
)(LoginPage)