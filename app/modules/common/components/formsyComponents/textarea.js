import React, { PropTypes } from 'react';

const Textarea = ({ className, title, name, getValue, setValue, getErrorMessage }) => {
  const errorMessage = getErrorMessage();
  const wrapperClassName = `input-group ${className}${errorMessage ? ' invalid' : ''}`;

  return (
    <div className={wrapperClassName}>
      {title && <label htmlFor={name}>{title}</label>}
      <textarea
        name={name}
        type="text"
        value={getValue() || ''}
        onChange={e => setValue(e.target.value)}
      />
      {errorMessage && <span className="validation-error">{errorMessage}</span>}
    </div>
  );
};

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  getValue: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  getErrorMessage: PropTypes.func.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
};

Textarea.defaultProps = {
  className: '',
  title: '',
};

export default Textarea;
