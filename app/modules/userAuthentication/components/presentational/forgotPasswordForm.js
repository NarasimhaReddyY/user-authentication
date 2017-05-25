import React, { Component } from 'react';
import FormWithSubmitButton from './formWithSubmitButton.js';
import { forgotPasswordFormPayload } from '../../../core/helpers/formInputPayload.js';
import {
  redirectTo,
  isResponseSuccess,
  isAnyErrors
} from '../../../core/helpers/index.js';

class ForgotPasswordForm extends Component{
	constructor(props){
		super(props);
    this.state = {
      errors: {}
    };
	}

	componentWillReceiveProps(nextProps){
    if (isResponseSuccess(nextProps)) {
      redirectTo('/reset-password');
    } else if(isAnyErrors(nextProps)){
      this.setState({ errors: nextProps.data.errors});
    } else {
      this.setState({ errors: {}});
    }
	};

	render(){
		return(
			<div className='forgot-password-form'>
        <FormWithSubmitButton
          handleOnSubmit={this.props.handleOnSubmit}
          errors={this.state.errors}
          submitButtonName="submit"
          submitButtonValue="Submit"
          data={forgotPasswordFormPayload}
        />
			</div>
		);
	}
};

export default ForgotPasswordForm;