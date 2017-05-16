import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import Formsy from 'formsy-react';
import { forgotPasswordActionCreaters } from '../../actionCreaters/index.js';
import {
  convertSnakeCaseToCamelCase,
  redirectTo
} from '../../../core/helpers/index.js';
import {
  Textfield,
  SubmitButton
} from '../../../common/components/formsyComponents/index.js';


class ForgotPasswordForm extends Component{
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
     	redirectTo('/reset-password');
    } else if(!responseSuccess && errors){
      this.refs.form.updateInputsWithError(convertSnakeCaseToCamelCase(errors));
    }
	};

	render(){
		return(
			<div className='forgot-password-form'>
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
					<SubmitButton 
						className="submit-button"
            disabled={!this.state.canSubmit}
						name="submit"
						value="Submit"
					/>
			  </Formsy.Form>
			</div>
		);
	}
};

export default ForgotPasswordForm;