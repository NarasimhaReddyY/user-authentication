import React,{ Component } from 'react';
import { browserHistory, Link } from 'react-router';
import Formsy from 'formsy-react';
import { Textfield, SubmitButton } from '../common/index.js';
import { convertSnakeCaseToCamelCase } from '../../../Core/helpers/index.js';

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
      //TODO: Need to finalise this pattern.
      localStorage.setItem('token', nextProps.data.user.api_token);

      browserHistory.push('/home');
    } else if(!responseSuccess && errors){
      this.refs.form.updateInputsWithError(convertSnakeCaseToCamelCase(errors));
    }
	};


  render(){
  	return(
      <div>
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
        <div>
          <Link to='/forgot-password'>forgot password?</Link>
        </div>
      </div>
  	);
  }
};

export default LoginForm;