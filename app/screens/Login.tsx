import React, {useState} from 'react';
import {Button} from 'native-base';
import AuthLayout from '../components/AuthLayout';
import AuthInput from '../components/AuthInput';
import AuthLinks from '../components/AuthLinks';
import SubmitButton from '../components/SubmitButton';
import axios from 'axios';
function Login({navigation}: any): JSX.Element {
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [buttonText, setButtonText] = useState('Login');
  const [buttonColor, setButtonColor] = useState('indigo');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const defaultValues = {
    email: '',
    password: '',
  };
  const [formValues, setFormValues] = useState(defaultValues);
  // Create validation function to check if email is valid
  const validateEmail = () => {
    console.log('what this validation email: ', formValues.email);
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email);
  };
  const handleChangeText = (key: string, value: string) => {
    setFormValues({...formValues, [key]: value});
  };
  const handleEmailBlur = () => {
    if (!validateEmail()) {
      console.log('INVALID EMAIL');
      setEmailError('Email is invalid');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (formValues.password.length < 8 || formValues.password.length > 20) {
      return false;
    }
    return true;
  };

  const handlePasswordBlur = () => {
    if (!validatePassword()) {
      setPasswordError('Password must be between 8 and 20 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    if (validateEmail() && validatePassword()) {
      console.log(formValues);

      try {
        console.log('SUBMITTING FORM');
        const response = await axios.post(
          'http://10.0.2.2:8000/api/user/signin', // for android emulator have to replace localhost with this
          formValues,
        );
        console.log(response);
        console.log(response.data);
        setFormValues(defaultValues);
      } catch (error) {
        if (error.response) {
          // Request was made but server responded with an error status code
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // Request was made but no response was received
          console.log(error.request);
        } else {
          // Something else happened while setting up the request
          console.log('Error', error.message);
        }
      }
    }
    if (!validateEmail() || !validatePassword()) {
      console.log('INVALID FORM');
    }
    setIsSubmitting(false);
  };

  return (
    <AuthLayout title="Welcome" subtitle="Sign in to continue!">
      <AuthInput
        label="Email"
        value={formValues.email}
        onBlur={handleEmailBlur}
        onChangeText={value => handleChangeText('email', value)}
        isInvalid={Boolean(emailError)}
        errorMessage={emailError}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <AuthInput
        label="Password"
        value={formValues.password}
        onBlur={handlePasswordBlur}
        placeholder="Enter your password"
        type="password"
        onChangeText={value => handleChangeText('password', value)}
        isInvalid={Boolean(passwordError)}
        errorMessage={passwordError}
        keyboardType="default"
        autoCapitalize="none"
        navigation={navigation}
        loginHelper={true}
      />

      <SubmitButton
        onPress={handleSubmit}
        isSubmitting={isSubmitting}
        buttonText={buttonText}
        buttonColor={buttonColor}
      />
      <AuthLinks
        navigation={navigation}
        message="Are you a new user?"
        linktext="Sign Up"
        linkpath="Register"
      />
    </AuthLayout>
  );
}
export default Login;
