import { connect }from 'react-redux';
import ResetPasswordForm from '../presentational/resetPasswordForm.js';
import { bindActionCreators } from 'redux';
import { resetPasswordActionCreaters } from '../../actionCreaters/index.js';

export const mapStateToProps = (state) => {
	return {
		requestSuccess: state.get('resetPassword').get('resetPasswordRequestSuccess'),
		data: state.get('resetPassword').get('data'),
	}
}

export const mapDispatchToProps = (dispatch) => {
	return {
		handleOnSubmit: bindActionCreators(resetPasswordActionCreaters, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ResetPasswordForm);