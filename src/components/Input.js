import React from 'react';
import PropTypes from 'prop-types';

import { useField } from '~/components/Form';

function Input({ name, type, label, placeholder, multiline }) {
  const { fieldName, error, defaultValue, handleChange } = useField(name);

  const fieldProps = {
    id: fieldName,
    name: fieldName,
    type,
    placeholder,
    defaultValue,
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
};

Input.defaultProps = {
  type: 'text',
  label: null,
  placeholder: '',
  multiline: false,
};

export default Input;
