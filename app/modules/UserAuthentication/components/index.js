import { HOC } from 'formsy-react';

import Input from './Textfield.js';
import Inputarea from './Textarea.js';

export const Textfield = HOC(Input);
export const Textarea = HOC(Inputarea);
