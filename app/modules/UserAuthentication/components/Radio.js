import React, { PropTypes } from 'react';

const Radio = ({ className, name, title, value, checked}) => {
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

Radio.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool
};

Radio.defaultProps = {
	className: '',
	checked: false
};

export default Radio;
