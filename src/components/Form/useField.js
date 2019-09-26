import { useContext } from 'react';

import FormContext from './FormContext';

export default function useField(fieldName) {
  const { initialData, errors, setValue } = useContext(FormContext);

  const defaultValue = initialData[fieldName];
  const error = errors[fieldName];

  function handleChange(e) {
    const { value } = e.target;
    setValue(fieldName, value);
  }

  return {
    fieldName,
    defaultValue,
    error,
    handleChange,
  };
}
