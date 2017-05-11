import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RegistrationForm from '../presentational/RegistrationForm.js';
import { registrationActionCreaters } from '../../actionCreaters/index.js';

//TODO: This code will be refactored when we use selectors.
export const mapStateToProps = (state) => {
  return {
    requestInitiated: state.get('registration').get('registrationRequestInitiated'),
    requestSuccess: state.get('registration').get('registrationRequestSuccess'),
    data: state.get('registration').get('data'),
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    handleOnSubmit: bindActionCreators(registrationActionCreaters, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm);