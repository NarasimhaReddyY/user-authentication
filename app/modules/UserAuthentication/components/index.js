/**
 * index.js
 *
 * Entry file for UserAuthentication Components,
 * used just to export form components
 * wrapped by formsy-react Higher Order Component
 */
import { HOC } from 'formsy-react';

/**
 * importing user defined components
 */
import Input from './Textfield';
import MultilineInput from './Textarea';
import Submit from './Submit';
import Radio from './Radio';


/*eslint-disable */

const Textfield    = HOC(Input);
const Textarea     = HOC(MultilineInput);
const SubmitButton = HOC(Submit);
const RadioButton  = HOC(Radio);

/*eslint-enable */

export {
  Textfield,
  Textarea,
  SubmitButton,
  RadioButton
};
