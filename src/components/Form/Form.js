import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FormProvider } from './FormContext';

function Form({ initialData, validationSchema, onSubmit, children }) {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});

  function setValue(fieldName, value) {
    setData({
      ...data,
      [fieldName]: value,
    });
  }

  function resetForm() {
    setData({});
    setErrors({});
  }

  async function handleSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (e && e.stopPropagation) e.stopPropagation();

    try {
      if (validationSchema) {
        await validationSchema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });
      }

      setErrors({});
      onSubmit(data, { resetForm });
    } catch (err) {
      if (err.name !== 'ValidationError' || !err.inner) throw err;

      const validationErrors = {};
      err.inner.forEach(({ path, message }) => {
        validationErrors[path] = message;
      });
      setErrors(validationErrors);
    }
  }

  return (
    <FormProvider
      value={{
        initialData,
        data,
        errors,
        setValue,
      }}
    >
      <form onSubmit={handleSubmit}>{children}</form>
    </FormProvider>
  );
}

Form.propTypes = {
  initialData: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  ),
  validationSchema: PropTypes.shape({
    validate: PropTypes.func.isRequired,
  }),
  onSubmit: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

Form.defaultProps = {
  initialData: {},
  validationSchema: null,
  onSubmit: () => {},
  children: null,
};

export default Form;
