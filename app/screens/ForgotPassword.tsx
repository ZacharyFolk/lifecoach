import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AuthLayout from '../components/AuthLayout';
import AuthInput from '../components/AuthInput';
import SubmitButton from '../components/SubmitButton';
import {useFormValidation} from '../util/useFormValidation';
function ForgotPassword(): JSX.Element {
  interface FormValues {
    [key: string]: string;
    email: string;
  }
  const initialValues: FormValues = {
    email: '',
  };
  const {formValues, setFormValues, errors, handleChangeText, handleBlur} =
    useFormValidation({
      initialValues,
    });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async () => {
    setIsSubmitting(true);
    setFormValues(initialValues);

    console.log('is submitting', isSubmitting);
    setTimeout(() => {
      setIsSubmitting(false);
      console.log('complete submit');
    }, 3000);
    // if (validateEmail()) {
    //   try {
    //     console.log('SUBMITTING FORM');
    //     const response = await axios.post(
    //       'http://10.0.2.2:8000/api/user/forgot-password',
    //       formValues,
    //     );
    //     console.log(response);

    //     setFormValues(defaultValues);
    //   } catch (error) {
    //     if (error) {
    //     } else if (error.request) {
    //       // Request was made but no response was received
    //       console.log(error.request);
    //     } else {
    //       // Something else happened while setting up the request
    //       console.log('Error', error.message);
    //     }
    //   }
    // }
    // if (!validateEmail()) {
    //   console.log('INVALID FORM');
    // }
  };
  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Email will be sent with reset instructions.">
      <AuthInput
        label="Email"
        value={formValues.email}
        onBlur={() => handleBlur('email')}
        onChangeText={value => handleChangeText('email', value)}
        isInvalid={Boolean(errors.email)}
        errorMessage={errors.email}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <SubmitButton
        onPress={handleSubmit}
        isSubmitting={isSubmitting}
        buttonText={'Send Email'}
      />
    </AuthLayout>
  );
}

export default ForgotPassword;
