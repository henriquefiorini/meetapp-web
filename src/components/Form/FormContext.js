import { createContext } from 'react';

const FormContext = createContext({
  getValue: () => {},
  setValue: () => {},
  getError: () => {},
});

export const FormProvider = FormContext.Provider;
export const FormConsumer = FormContext.Consumer;

export default FormContext;
