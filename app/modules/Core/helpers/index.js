import _ from 'lodash';

export const convertSnakeCaseToCamelCase = (json) =>{
  let validationErrors = _.mapKeys(json, (value, key) => {
    return _.camelCase(key);
  });

	return validationErrors;
};