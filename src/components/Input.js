import React from 'react';
import PropTypes from 'prop-types';

import { useField } from '~/components/Form';

function Input({
  name,
  type,
  label,
  placeholder,
  multiline,
  readOnly,
  disabled,
}) {
  const { fieldName, value, error, handleChange } = useField(name);

  const fieldProps = {
    id: fieldName,
    name: fieldName,
    type,
    placeholder,
    value,
    readOnly,
    disabled,
    onChange: handleChange,
  };

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}
      {multiline ? <textarea {...fieldProps} /> : <input {...fieldProps} />}
      {error && <small>{error}</small>}
    </>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  multiline: PropTypes.bool,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  label: null,
  placeholder: null,
  multiline: false,
  readOnly: false,
  disabled: false,
};

export default Input;
