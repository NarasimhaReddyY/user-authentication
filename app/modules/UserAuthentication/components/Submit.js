import React, { PropTypes } from 'react';

const Submit = ({ className, name, value }) => {
	return (
		<div className={className}>
			<input
			  type="submit"
			  name={name}
			  value={value}
			/>
		</div>
	);
}

Submit.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string.isRequired,
	value: PropTypes.string,
};


Submit.defaultProps = {
  className: '',
  value: 'submit',
};

export default Submit;