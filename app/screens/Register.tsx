import React, {useEffect, useState} from 'react';

import axios from 'axios';
import AuthLayout from '../components/AuthLayout';
import AuthInput from '../components/AuthInput';
import {Button, Text} from 'native-base';
import AuthLinks from '../components/AuthLinks';
function Register({navigation}: any): JSX.Element {
  const [username, setUsername] = React.useState('');
  const [usernameError, setUsernameError] = useState('');
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [buttonText, setButtonText] = React.useState('Sign up');
  const [buttonColor, setButtonColor] = React.useState('indigo');
  const defaultValues = {
    name: '',
    email: '',
    password: '',
  };
  const [formValues, setFormValues] = useState(defaultValues);

  useEffect(() => {
    // if is submitting console log message
    if (isSubmitting) {
      setButtonText('Submitting...');
      setButtonColor('gray');
    } else {
      setButtonText('Sign up');
      setButtonColor('indigo');
    }
  }, [isSubmitting]);

  const handleChangeText = (key: string, value: string) => {
    setFormValues({...formValues, [key]: value});
  };

  // validations
  const validateEmail = () => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email);
  };
  // validation that checks is not empty
  const validateUsername = () => {
    if (formValues.name.length < 3 || formValues.name.length > 20) {
      return false;
    }
    return true;
  };
  const validatePassword = () => {
    if (formValues.password.length < 8 || formValues.password.length > 20) {
      return false;
    }
    return true;
  };
  // onblur events for validations
  const handleUsernameBlur = () => {
    if (!validateUsername()) {
      setUsernameError('Username must be between 3 and 20 characters');
    } else {
      setUsernameError('');
    }
  };
  const handleEmailBlur = () => {
    if (!validateEmail()) {
      setEmailError('Use email format like name@domain.com');
    } else {
      setEmailError('');
    }
  };
  const handlePasswordBlur = () => {
    if (!validatePassword()) {
      setPasswordError('Password must be between 8 and 20 characters');
    } else {
      setPasswordError('');
    }
  };
  // submit function
  const handleSubmit = async () => {
    setIsSubmitting(true);
    if (validateUsername() && validateEmail() && validatePassword()) {
      setIsSuccess(true);
      setIsError(false);
      setIsSubmitted(true);

      console.log(formValues);
      axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
      axios.defaults.headers.post['Content-Type'] = 'application/json';
      try {
        console.log(formValues);
        const response = await axios.post(
          'http://10.0.2.2:8000/api/user/create', // for android emulator have to replace localhost with this
          formValues,
          {withCredentials: true},
        );
        console.log(response.data);
        setFormValues(defaultValues);
      } catch (error) {
        console.log(error);
      }
    }
    if (!validateUsername() || !validateEmail() || !validatePassword()) {
      setIsSuccess(false);
      setIsError(true);
      setIsSubmitted(true);
      setErrorMessage('Please check your inputs');
    }

    setTimeout(() => {
      setIsSubmitting(false);
    }, 3000);
  };

  return (
    <AuthLayout title="Sign Up" subtitle="Create a new acccount!">
      <AuthInput
        label="Username"
        value={formValues.name}
        onBlur={handleUsernameBlur}
        onChangeText={value => handleChangeText('name', value)}
        isInvalid={Boolean(usernameError)}
        errorMessage={usernameError}
        autoCapitalize="none"
      />

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
      />

      <Button
        mt="2"
        onPress={handleSubmit}
        disabled={isSubmitting}
        colorScheme={buttonColor}>
        <Text>{buttonText}</Text>
      </Button>
      <AuthLinks
        navigation={navigation}
        message="Already have an account?"
        linktext="Log In"
        linkpath="Login"
      />
    </AuthLayout>
  );
}
export default Register;
