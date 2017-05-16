import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { Link } from 'react-router';
import {
  Textfield,
  SubmitButton,
  RadioButton
} from '../../../common/components/formsyComponents/index.js';

import {
  convertSnakeCaseToCamelCase,
  redirectTo
} from '../../../core/helpers/index.js';

class RegistrationForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      canSubmit: false
    };

    this.resetForm     = this.resetForm.bind(this);
    this.enableButton  = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
  };

  enableButton(){
    this.setState({ canSubmit: true });
  }

  disableButton(){
    this.setState({ canSubmit: false });
  }

  resetForm(){
    this.refs.form.reset();
  };

  componentWillReceiveProps(nextProps){
    const { requestSuccess, data } = nextProps;
    const responseSuccess = data.success;
    const errors = data.errors;

    if(!!requestSuccess && responseSuccess){
      redirectTo('/login');
    } else if(!responseSuccess && errors){
      this.refs.form.updateInputsWithError(convertSnakeCaseToCamelCase(errors));
    }
  };


  render(){
    return (
      <div className='registration-form'>
        <div className='input-group'>
          <Formsy.Form
            ref="form"
            onInvalid={this.disableButton}
            onValid={this.enableButton}
            onValidSubmit={this.props.handleOnSubmit}
          >
            <Textfield
              className="form-input"
              title="First Name"
              name="firstName"
              type="text"
              required
            />

            <Textfield
              className="form-input"
              title="Last Name"
              name="lastName"
              type="text"
              required
            />

            <Textfield
              className="form-input"
              title="Email"
              name="email"
              type="email"
              validations="isEmail"
              validationError="Enter a valid email"
              required
            />

            <Textfield
              className="form-input"
              title="Phone Number"
              name="phoneNumber"
              type="text"
              validations="isNumeric"
              validationError="Enter a valid phone number"
              required
            />

            <Textfield
              className="form-input"
              title="Password"
              name="password"
              type="password"
              required
            />

            <Textfield
              className="form-input"
              title="Confirm Password"
              name="confirmPassword"
              type="password"
              required
            />
            <div className="form-button-group">
              <SubmitButton 
                className="submit-button"
                name="submit"
                disabled={!this.state.canSubmit}
                value="SignUp"
              />

              <SubmitButton
                className="reset-button" 
                name="resetButton"
                value="Reset"
                handleOnClick={this.resetForm}
              />
            </div>
          </Formsy.Form>
        </div>
        <div className="link-to-signin">
          already registered? <Link to='/login'>Signin Here</Link>
        </div>
      </div>
    );	
  }
};

export default RegistrationForm;