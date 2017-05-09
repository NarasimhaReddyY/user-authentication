import React, { PropTypes } from 'react';

const RadioButton = ({ className, name, title, value, checked}) => {
	return (
		<div className={className}>
		  <input
		    type="radio"
		    name={name}
		    value={value}
		    defaultChecked={checked}
		  />
		  {title}
		</div>
	);
};

RadioButton.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool
};

RadioButton.defaultProps = {
	className: '',
	checked: false
};

export default RadioButton;
