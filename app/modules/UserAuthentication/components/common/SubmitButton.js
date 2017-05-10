import React, { PropTypes } from 'react';

const SubmitButton = ({ className, name, value, handleOnClick }) => {
	return (
		<div className={className}>
			<input
			  type="submit"
			  name={name}
			  value={value}
			  onClick={handleOnClick}
			/>
		</div>
	);
}

SubmitButton.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string.isRequired,
	value: PropTypes.string,
	handleOnClick: PropTypes.func
};


SubmitButton.defaultProps = {
  className: '',
  value: 'submit',
};

export default SubmitButton;