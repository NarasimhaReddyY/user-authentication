import React, { PropTypes } from 'react';

const SubmitButton = ({ className, name, value, disabled, handleOnClick }) => {
	return (
		<div className={className}>
			<input
			  type="submit"
			  name={name}
			  value={value}
			  disabled={disabled}
			  onClick={handleOnClick}
			/>
		</div>
	);
}

SubmitButton.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string.isRequired,
	value: PropTypes.string,
	disabled: PropTypes.bool.isRequired,
	handleOnClick: PropTypes.func
};


SubmitButton.defaultProps = {
  className: '',
  disabled: false,
  value: 'submit'
};

export default SubmitButton;