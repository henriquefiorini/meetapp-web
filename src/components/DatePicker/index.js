import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';

import { StyledInput } from './styles';

function DatePicker({ name, label, placeholder, ...rest }) {
  const ref = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <StyledInput
        id={fieldName}
        name={fieldName}
        placeholderText={placeholder}
        autoComplete="off"
        selected={selected}
        onChange={date => setSelected(date)}
        ref={ref}
        {...rest}
      />
      {error && <span>{error}</span>}
    </>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

DatePicker.defaultProps = {
  label: null,
  placeholder: null,
};

export default DatePicker;
