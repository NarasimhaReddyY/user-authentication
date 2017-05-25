import React,{ Component } from 'react';
import { Link } from 'react-router';
import FormWithSubmitButton from './formWithSubmitButton.js';
import { loginFormPayload } from '../../../core/helpers/formInputPayload.js';
import {
  isResponseSuccess,
  isAnyErrors,
  redirectTo
} from '../../../core/helpers/index.js';


class LoginForm extends Component {
  
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
      <div>
        <div className="login-form">
          <FormWithSubmitButton
            handleOnSubmit={this.props.handleOnSubmit}
            errors={this.state.errors}
            submitButtonName="login"
            submitButtonValue="Login"
            data={loginFormPayload}
          />       
        </div>
        <div>
          <Link to='/forgot-password'>forgot password?</Link>
        </div>
      </div>
  	);
  }
};

export default LoginForm;