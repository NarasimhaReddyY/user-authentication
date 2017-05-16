import React,{ Component } from 'react';
import { Link } from 'react-router';
import Formsy from 'formsy-react';
import { Textfield, SubmitButton } from '../../../common/components/formsyComponents/index.js';
import {
  convertSnakeCaseToCamelCase,
  setToken,
  redirectTo
} from '../../../core/helpers/index.js';

class LoginForm extends Component {

	constructor(props){
		super(props);
    this.state = {
      canSubmit: false
    };

    this.enableButton  = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
	}

  enableButton(){
    this.setState({ canSubmit: true });
  }

  disableButton(){
    this.setState({ canSubmit: false });
  }

	componentWillReceiveProps(nextProps){
    const { requestSuccess, data } = nextProps;
    const responseSuccess = data.success;
    const errors = data.errors;

    if(!!requestSuccess && responseSuccess){
      setToken(data.user.api_token);
      redirectTo("/home");
    } else if(!data.success && data.errors){
      this.refs.form.updateInputsWithError(convertSnakeCaseToCamelCase(errors));
    }
	};


  render(){    
  	return(
      <div>
        <div className="login-form">
          <Formsy.Form
            ref="form"
            onInvalid={this.disableButton}
            onValid={this.enableButton}
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
              disabled={!this.state.canSubmit}
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