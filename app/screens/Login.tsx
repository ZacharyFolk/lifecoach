import React from 'react';
import {Button} from 'native-base';
import AuthLayout from '../components/AuthLayout';
import AuthInput from '../components/AuthInput';
import AuthLinks from '../components/AuthLinks';
function Login({navigation}: any): JSX.Element {
  const [email, setEmail] = React.useState('');

  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');

  // Create validation function to check if email is valid
  const validateEmail = (emailValue: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
  };

  const handleEmailBlur = () => {
    if (!validateEmail(email)) {
      console.log('INVALID EMAIL');
      setEmailError('Email is invalid');
    } else {
      setEmailError('');
    }
  };

  // Create validation function to check if password is minimum 8 characters and maximum 20 characters
  const validatePassword = (passwordValue: string) => {
    if (passwordValue.length < 8 || passwordValue.length > 20) {
      return false;
    }
    return true;
  };

  const handlePasswordBlur = () => {
    if (!validatePassword(password)) {
      setPasswordError('Password must be between 8 and 20 characters');
    } else {
      setPasswordError('');
    }
  };
  return (
    <AuthLayout title="Welcome" subtitle="Sign in to continue!">
      <AuthInput
        label="Email"
        value={email}
        onBlur={handleEmailBlur}
        onChangeText={value => setEmail(value)}
        isInvalid={Boolean(emailError)}
        errorMessage={emailError}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <AuthInput
        label="Password"
        value={password}
        onBlur={handlePasswordBlur}
        placeholder="Enter your password"
        type="password"
        onChangeText={value => setPassword(value)}
        isInvalid={Boolean(passwordError)}
        errorMessage={passwordError}
        keyboardType="default"
        autoCapitalize="none"
        navigation={navigation}
        loginHelper={true}
      />

      <Button mt="2" colorScheme="indigo">
        Sign in
      </Button>

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
