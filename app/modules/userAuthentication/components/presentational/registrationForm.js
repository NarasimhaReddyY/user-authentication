import React, { Component } from 'react';
import { Link } from 'react-router';
import FormWithSubmitButton from './formWithSubmitButton.js';
import { registrationFormPayload } from '../../../core/helpers/formInputPayload.js';
import {
  redirectTo,
  isResponseSuccess,
  isAnyErrors
} from '../../../core/helpers/index.js';

class RegistrationForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      errors: []
    };
  };

  componentWillReceiveProps(nextProps){
    if (isResponseSuccess(nextProps)) {
      redirectTo('/login');
    } else if(isAnyErrors(nextProps)){
      this.setState({errors: nextProps.data.errors});
    }
  };

  render(){
    return (
      <div className='registration-form'>
        <div className='input-group'>
          <FormWithSubmitButton
            handleOnSubmit={this.props.handleOnSubmit}
            errors={this.state.errors}
            submitButtonName="signup"
            submitButtonValue="Sign Up"
            data={registrationFormPayload}
          />
        </div>
        <div className="link-to-signin">
          already registered? <Link to='/login'>Signin Here</Link>
        </div>
      </div>
    );	
  }
};

export default RegistrationForm;