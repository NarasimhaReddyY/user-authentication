import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { Textfield, SubmitButton, RadioButton } from './index.js';

class RegistrationForm extends Component {
  render(){
    return (
      <div>
        <Formsy.Form>
          <Textfield
            className="text-input"
            title="First Name"
            name="firstName"
            type="text"
            required
          />

          <Textfield
            className="text-input"
            title="Last Name"
            name="lastName"
            type="text"
            required
          />

          <Textfield
            className="text-input"
            title="Email"
            name="email"
            type="email"
            validations="isEmail"
            validationError="Enter a valid email"
            required
          />

          <Textfield
            className="text-input"
            title="Phone Number"
            name="phoneNumber"
            type="number"
            validations="isNumeric"
            validationError="Enter a valid phone number"
            required
          />

          <Textfield
            className="text-input"
            title="Password"
            name="password"
            type="password"
            required
          />

          <Textfield
            className="text-input"
            title="Confirm Password"
            name="confirmPassword"
            type="password"
            required
          />

          <SubmitButton 
            name="submit"
            value="SignUp" />
        </Formsy.Form>
      </div>
    );	
  }
};

export default RegistrationForm;