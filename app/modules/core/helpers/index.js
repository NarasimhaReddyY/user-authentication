import _ from 'lodash';
import { browserHistory } from 'react-router';

export const convertSnakeCaseToCamelCase = (json) =>{
  let validationErrors = _.mapKeys(json, (value, key) => {
    return _.camelCase(key);
  });

	return validationErrors;
};

export const setToken = (token) => {
	localStorage.setItem('token', token);
};

export const redirectTo = (pathName) => {
	browserHistory.push(pathName);
};

export const isResponseSuccess = (response) => {
	return (!!response.requestSuccess && response.data.success);
}

export const isAnyErrors = (response) => {
	return (!response.data.success && response.data.errors);
};