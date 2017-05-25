import React,{ Component, PropTypes } from 'react';
import Formsy from 'formsy-react';
import _ from 'lodash';
import { SubmitButton } from '../../../common/components/formsyComponents/index.js';
import { buildFormComponents } from '../../../core/helpers/formComponentBuilder.js';

class FormWithSubmitButton extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      canSubmit: false,
      formInputs: []
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

  componentWillMount(){
    let formInputs = buildFormComponents(this.props.data);
    this.setState({ formInputs: formInputs });
  };

  componentWillReceiveProps(nextProps){
    if(!_.isEmpty(nextProps.errors)){
      this.refs.form.updateInputsWithError(nextProps.errors);
    };
  };

  render(){    
  	return(
      <div>
        <Formsy.Form
          ref="form"
          onInvalid={this.disableButton}
          onValid={this.enableButton}
          onValidSubmit={this.props.handleOnSubmit}
         >
          { this.state.formInputs }
          <SubmitButton
            name={this.props.submitButtonName}
            value={this.props.submitButtonValue}
            disabled={!this.state.canSubmit}
          />
        </Formsy.Form>        
      </div>
  	);
  }
};

FormWithSubmitButton.propTypes = {
  data: PropTypes.array.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  submitButtonValue: PropTypes.string,
  submitButtonName: PropTypes.string
}

FormWithSubmitButton.defaultProps = {
  submitButtonValue: "submit",
  submitButtonName: "Submit"
}

export default FormWithSubmitButton;