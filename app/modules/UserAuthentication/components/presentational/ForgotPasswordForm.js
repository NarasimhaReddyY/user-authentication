import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect }from 'react-redux';
import Formsy from 'formsy-react';
import { forgotPasswordActionCreaters } from '../../actionCreaters/index.js';
import { Textfield, SubmitButton } from '../common/index.js';
import { convertSnakeCaseToCamelCase } from '../../../Core/helpers/index.js';


class ForgotPasswordForm extends Component{
	constructor(props){
		super(props);
		this.notifyFormError = this.notifyFormError.bind(this);
	}

	notifyFormErrors(data, resetForm, invalidateForm) {
    let errors = {}
    this.refs.form.inputs.forEach( (input) => {
      if(input.showRequired()) {
      errors[input.props.name] = 'Should not be blank'
      }
    })
    invalidateForm(errors)
  }

	componentWillReceiveProps(nextProps){
    var requestSuccess  = nextProps.requestSuccess;
    var responseSuccess = nextProps.data.success;
    var errors          = nextProps.data.errors; 

    if(!!requestSuccess && responseSuccess){
     	browserHistory.push('/reset-password');
    } else if(!responseSuccess && errors){
      this.refs.form.updateInputsWithError(convertSnakeCaseToCamelCase(errors));
    }
	};

	render(){
		return(
			<div className='forgot-password-form'>
			  <Formsy.Form
			    onValidSubmit={this.props.handleOnSubmit}
			    onInvalidSubmit={this.notifyFormErrors}
			    ref="form"
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
						name="submit"
						value="Submit"
					/>
			  </Formsy.Form>
			</div>
		);
	}
};

export const mapStateToProps = (state) => {
	return {
		requestInitiated: state.get('forgotPassword').get('forgotPasswordRequestInitiated'),
		requestSuccess: state.get('forgotPassword').get('forgotPasswordRequestSuccess'),
		data: state.get('forgotPassword').get('data'),
	}
}

export const mapDispatchToProps = (dispatch) => {
	return {
		handleOnSubmit: bindActionCreators(forgotPasswordActionCreaters, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ForgotPasswordForm);