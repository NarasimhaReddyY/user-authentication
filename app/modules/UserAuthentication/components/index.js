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


/*eslint-disable */

const Textfield = HOC(Input);
const Textarea = HOC(MultilineInput);
const SubmitButton = HOC(Submit);

/*eslint-enable */

export {
  Textfield,
  Textarea,
  SubmitButton
};
