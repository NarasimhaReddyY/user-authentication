import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RegistrationForm from '../presentational/RegistrationForm.js';
import { registrationActionCreaters } from '../../actionCreaters/index.js';

export const mapStateToProps = (state) => {
  return {

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