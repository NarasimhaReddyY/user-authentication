import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { Textfield, SubmitButton, RadioButton } from './index.js';

class RegistrationForm extends Component {
  constructor(props){
    super(props);
    this.resetForm = this.resetForm.bind(this);
  };

  resetForm(){
    this.refs.form.reset();
  }

  render(){
    return (
      <div className="registration-form">
        <Formsy.Form ref="form">
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

          <SubmitButton 
            className="submit-button"
            name="submit"
            value="SignUp"
          />

          <SubmitButton 
            name="reset-button"
            value="Reset"
            handleOnClick={this.resetForm}
          />
        </Formsy.Form>
      </div>
    );	
  }
};

export default RegistrationForm;