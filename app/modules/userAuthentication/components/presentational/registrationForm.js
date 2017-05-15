import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { browserHistory, Link } from 'react-router';
import { Textfield, SubmitButton, RadioButton } from '../../../common/components/formsyComponents/index.js';
import { convertSnakeCaseToCamelCase } from '../../../core/helpers/index.js';

class RegistrationForm extends Component {
  constructor(props){
    super(props);
    this.resetForm        = this.resetForm.bind(this);
    this.notifyFormErrors = this.notifyFormErrors.bind(this);
  };

  componentWillReceiveProps(nextProps){
    var requestSuccess  = nextProps.requestSuccess;
    var responseSuccess = nextProps.data.success;
    var errors          = nextProps.data.errors; 

    if(!!requestSuccess && responseSuccess){
      browserHistory.push('/login');
    } else if(!responseSuccess && errors){
      this.refs.form.updateInputsWithError(convertSnakeCaseToCamelCase(errors));
    }
  };

  resetForm(){
    this.refs.form.reset();
  };

  notifyFormErrors(data, resetForm, invalidateForm) {
    let errors = {}
    this.refs.form.inputs.forEach( (input) => {
      if(input.showRequired()) {
      errors[input.props.name] = 'Should not be blank'
      }
    })
    invalidateForm(errors)
  }

  render(){
    return (
      <div className='registration-form'>
        <div className='input-group'>
          <Formsy.Form
            ref="form"
            onInvalidSubmit={this.notifyFormErrors}
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