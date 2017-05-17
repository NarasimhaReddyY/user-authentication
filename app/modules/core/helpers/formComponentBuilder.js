import React from 'react';
import _ from 'lodash';
import { Textfield, SubmitButton } from '../../common/components/formsyComponents/index.js';

export const buildFormComponents = (data) => {
	let formInputComponents = _.map(data, (item, index) => {
	  return createFormComponent(item, index);
	})

	return formInputComponents;
};

export const createFormComponent = (item, index) => {
  switch(item.type){
    case 'text': {
        return <Textfield
                className="form-input"
                key={index}
                name={item.name}
                title={item.title}
                validations={item.validation} 
                validationError={item.validationError}
                type="text"
                required={item.required}
               />
      }
    case 'email': {
      return <Textfield
              className="form-input"
              key={index}
              name={item.name}
              title={item.title}
              validations={item.validations || "isEmail"} 
              validationError={item.validationError || "Enter a valid email"}
              type="email"
              required={item.required}
            />
    }
    case 'password': {
      return <Textfield
              className="form-input"
              key={index}
              name={item.name}
              title={item.title}
              validations={item.validation} 
              validationError={item.validationError}
              type="password"
              required={item.required}
            />
    }
  }
};