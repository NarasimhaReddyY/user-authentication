import React,{ Component } from 'react';
import { browserHistory, Link } from 'react-router';
import Formsy from 'formsy-react';
import { Textfield, SubmitButton } from '../../../common/components/formsyComponents/index.js';

class ResetPasswordForm extends Component {

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
      browserHistory.push('/home');
    } else if(!responseSuccess && errors){
      this.refs.form.updateInputsWithError(errors);
    }
	};

  render(){    
  	return(
      <div className="reset-password-form">
        <Formsy.Form
          ref="form"
          onValid={this.enableButton}
          onInvalid={this.disableButton}
          onValidSubmit={this.props.handleOnSubmit}
         >
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
            name="resetPassword"
            value="Reset Password"
            disabled={!this.state.canSubmit}
          />
        </Formsy.Form>        
      </div>
  	);
  }
};

export default ResetPasswordForm;