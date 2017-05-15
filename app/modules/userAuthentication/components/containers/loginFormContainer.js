import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginForm from '../presentational/loginForm.js';
import { loginActionCreaters } from '../../actionCreaters/index.js';

//TODO: This code will be refactored when we use selectors.
export const mapStateToProps = (state) => {
  return {
    requestInitiated: state.get('login').get('loginRequestInitiated'),
    requestSuccess: state.get('login').get('loginRequestSuccess'),
    data: state.get('login').get('data'),
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    handleOnSubmit: bindActionCreators(loginActionCreaters, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);