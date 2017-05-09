import React, { PropTypes } from 'react';

const SubmitButton = ({ className, name, value }) => {
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

SubmitButton.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string.isRequired,
	value: PropTypes.string,
};


SubmitButton.defaultProps = {
  className: '',
  value: 'submit',
};

export default SubmitButton;