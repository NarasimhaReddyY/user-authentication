import { connect }from 'react-redux';
import ForgotPasswordForm from '../presentational/forgotPasswordForm.js';
import { bindActionCreators } from 'redux';
import { forgotPasswordActionCreaters } from '../../actionCreaters/index.js';

export const mapStateToProps = (state) => {
	return {
		requestInitiated: state.get('forgotPassword').get('forgotPasswordRequestInitiated'),
		requestSuccess: state.get('forgotPassword').get('forgotPasswordRequestSuccess'),
		data: state.get('forgotPassword').get('data'),
	}
}

export const mapDispatchToProps = (dispatch) => {
	return {
		handleOnSubmit: bindActionCreators(forgotPasswordActionCreaters, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ForgotPasswordForm);