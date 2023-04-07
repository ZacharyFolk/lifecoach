import {useState} from 'react';
import {validateEmail, validateUsername, validatePassword} from './validations';

interface ValidationRules {
  [key: string]: {
    validate: (value: string) => boolean;
    error: string;
  };
}

const validationRules: ValidationRules = {
  email: {
    validate: validateEmail,
    error: 'Use email format like name@domain.com',
  },
  username: {
    validate: validateUsername,
    error: 'Username must be between 3 and 20 characters',
  },
  password: {
    validate: validatePassword,
    error: 'Password must be between 8 and 20 characters',
  },
};

interface UseFormValidationProps {
  initialValues: {
    [key: string]: string;
  };
}

export const useFormValidation = ({initialValues}: UseFormValidationProps) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChangeText = (name: string, value: string) => {
    setFormValues({...formValues, [name]: value});
  };

  const handleBlur = (name: string) => {
    const rule = validationRules[name];
    if (!rule) {
      return;
    }

    const isValid = rule.validate(formValues[name]);
    setErrors({...errors, [name]: isValid ? '' : rule.error});
  };

  const clearForm = () => {
    setFormValues(initialValues);
  };

  return {
    formValues,
    setFormValues,
    errors,
    handleChangeText,
    handleBlur,
    clearForm,
  };
};
