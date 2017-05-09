import React,{ Component } from 'react';
import Formsy from 'formsy-react';
import { Textfield, SubmitButton } from './index.js';

class LoginForm extends Component {
  render(){
  	return(
  		<div className="login-form">
  		  <Formsy.Form>
          <Textfield
	  		    className="form-input"
	  		    name="email"
	  		    title="Email"
	  		    type="email"
            validations="isEmail"
            validationError="Enter a valid email"
	  		    required
	  		  />

	  		  <Textfield
	  		    className="form-input"
	  		    name="password"
	  		    title="Password"
	  		    type="password"
	  		    required
	  		  />

	  		  <SubmitButton
	  		    name="login"
	  		    value="Login"
	  		  />
  		  </Formsy.Form>  		  
  		</div>
  	);
  }
};

export default LoginForm;