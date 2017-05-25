import React,{ Component } from 'react';
import { Link } from 'react-router';
import FormWithSubmitButton from './formWithSubmitButton.js';
import { resetPasswordFormPayload } from '../../../core/helpers/formInputPayload.js';
import {
  redirectTo,
  isResponseSuccess,
  isAnyErrors
} from '../../../core/helpers/index.js';

class ResetPasswordForm extends Component {

	constructor(props){
		super(props);
    this.state = {
      errors: {}
    };
  }

	componentWillReceiveProps(nextProps){
    if (isResponseSuccess(nextProps)) {
      redirectTo('/home');
    } else if(isAnyErrors(nextProps)){
      this.setState({errors: nextProps.data.errors});
    } else {
      this.setState({errors: {}});
    }
	};

  render(){    
  	return(
      <div className="reset-password-form">
        <FormWithSubmitButton
          handleOnSubmit={this.props.handleOnSubmit}
          errors={this.state.errors}
          submitButtonName="resetPassword"
          submitButtonValue="Reset Password"
          data={resetPasswordFormPayload}
        />
      </div>
  	);
  }
};

export default ResetPasswordForm;