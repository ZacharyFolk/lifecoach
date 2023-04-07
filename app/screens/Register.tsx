import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AuthLayout from '../components/AuthLayout';
import AuthInput from '../components/AuthInput';
import AuthLinks from '../components/AuthLinks';
import SubmitButton from '../components/SubmitButton';
import {useFormValidation} from '../util/useFormValidation';
import AppNotification from '../components/AppNotification';
import {updateNotification} from '../util/helpers';
function Register({navigation}: any): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const {formValues, errors, handleChangeText, handleBlur, clearForm} =
    useFormValidation({
      initialValues,
    });
  const [message, setMessage] = useState({
    text: '',
    type: '',
  });
  // submit function
  const handleSubmit = async () => {
    setIsSubmitting(true);
    clearForm();

    try {
      const response = await axios.post(
        'http://10.0.2.2:8000/api/user/create', // for android emulator have to replace localhost with this
        formValues,
        {
          timeout: 5000, // Set a timeout of 5 seconds
        },
      );

      console.log(response.data);
      // eslint-disable-next-line no-lone-blocks
      {
        response.data.success &&
          updateNotification(
            setMessage,
            'Great!  Now confirm your email.',
            'success',
          );
      }
    } catch (error: any) {
      if (error.response) {
        setIsSubmitting(false);
        return updateNotification(
          setMessage,
          error.response.data.error,
          'error',
        );
      }
    }

    setTimeout(() => {
      console.log('derp');
      setIsSubmitting(false);
      console.log('Submitted', setIsSubmitting);
    }, 300);
  };

  return (
    <>
      {message.text && (
        <AppNotification type={message.type} text={message.text} />
      )}

      <AuthLayout title="Sign Up" subtitle="Create a new acccount!">
        <AuthInput
          label="Username"
          value={formValues.name}
          onBlur={() => handleBlur('name')}
          onChangeText={value => handleChangeText('name', value)}
          isInvalid={Boolean(errors.email)}
          errorMessage={errors.email}
          autoCapitalize="none"
        />

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

        <AuthInput
          label="Password"
          value={formValues.password}
          onBlur={() => handleBlur('password')}
          placeholder="Enter your password"
          type="password"
          onChangeText={value => handleChangeText('password', value)}
          isInvalid={Boolean(errors.password)}
          errorMessage={errors.password}
          keyboardType="default"
          autoCapitalize="none"
          navigation={navigation}
          loginHelper={false}
        />

        <SubmitButton
          onPress={handleSubmit}
          isSubmitting={isSubmitting}
          buttonText={'Sign up'}
        />
        <AuthLinks
          navigation={navigation}
          message="Already have an account?"
          linktext="Log In"
          linkpath="Login"
        />
      </AuthLayout>
    </>
  );
}
export default Register;
