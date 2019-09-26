import { useContext } from 'react';

import FormContext from './FormContext';

export default function useField(fieldName) {
  const { getValue, setValue, getError } = useContext(FormContext);

  const value = getValue(fieldName);
  const error = getError(fieldName);

  function handleChange(e) {
    setValue(fieldName, e.target.value);
  }

  return {
    fieldName,
    value,
    error,
    handleChange,
  };
}
