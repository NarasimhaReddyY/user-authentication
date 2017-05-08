import React, { PropTypes } from 'react';

const Check = ({ className, name, title, value, checked}) => {
	return (
		<div className={className}>
		  <input
		    type="checkbox"
		    name={name}
		    value={value}
		    defaultChecked={checked}
		  />
		  {title}
		</div>
	);
};

Check.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool
};

Check.defaultProps = {
	className: '',
	checked: false
};

export default Check;
