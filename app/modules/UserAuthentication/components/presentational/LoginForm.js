import React,{ Component } from 'react';
import { browserHistory } from 'react-router';
import Formsy from 'formsy-react';
import { Textfield, SubmitButton } from '../common/index.js';

class LoginForm extends Component {

	constructor(props){
		super(props);

		this.validateForm = this.validateForm.bind(this);
	}

  validateForm(formData){
    let validationErrors = {};
    const errorMessage = "Should not be empty";
    
    _.forEach(formData, (value, key) => {
      if(_.isEmpty(value)){
        validationErrors[key] = errorMessage;
      }
    });

    this.refs.form.updateInputsWithError(validationErrors);
  };

	componentWillReceiveProps(nextProps){
    var requestSuccess  = nextProps.requestSuccess;
    var responseSuccess = nextProps.data.success;
    var errors          = nextProps.data.errors; 

    if(!!requestSuccess && responseSuccess){
      browserHistory.push('/home');
    } else if(!responseSuccess && errors){
      var validationErrors = _.mapKeys(errors, (value, key) => {
        return _.camelCase(key);
      });
      this.refs.form.updateInputsWithError(validationErrors);
    }
	};


  render(){
  	return(
  		<div className="login-form">
  		  <Formsy.Form
  		    ref="form"
  		    onInvalidSubmit={this.validateForm}
  		    onValidSubmit={this.props.handleOnSubmit}
  		   >
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