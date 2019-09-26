import { createContext } from 'react';

const FormContext = createContext({
  initialData: {},
  data: {},
  errors: {},
  setValue: () => {},
});

export const FormProvider = FormContext.Provider;
export const FormConsumer = FormContext.Consumer;

export default FormContext;
