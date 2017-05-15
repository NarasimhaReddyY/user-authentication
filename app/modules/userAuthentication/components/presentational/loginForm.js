import React,{ Component } from 'react';
import { browserHistory, Link } from 'react-router';
import Formsy from 'formsy-react';
import { Textfield, SubmitButton } from '../../../common/components/formsyComponents/index.js';
import { convertSnakeCaseToCamelCase } from '../../../core/helpers/index.js';

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