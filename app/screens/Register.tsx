import React from 'react';
import AuthLayout from '../components/AuthLayout';
import AuthInput from '../components/AuthInput';

import {Button} from 'native-base';
import AuthLinks from '../components/AuthLinks';
function Register({navigation}: any): JSX.Element {
  const [username, setUsername] = React.useState('');
  const [usernameError, setUsernameError] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const validateEmail = (emailValue: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
  };
  // validation that checks is not empty
  const validateUsername = (usernameValue: string) => {
    if (usernameValue.length < 3 || usernameValue.length > 20) {
      return false;
    }
    return true;
  };

  const handleUsernameBlur = () => {
    if (!validateUsername(username)) {
      setUsernameError('Username must be between 3 and 20 characters');
    } else {
      setUsernameError('');
    }
  };

  const handleEmailBlur = () => {
    if (!validateEmail(email)) {
      setEmailError('Use email format like name@domain.com');
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
    <AuthLayout title="Sign Up" subtitle="Create a new acccount!">
      <AuthInput
        label="Username"
        value={username}
        onBlur={handleUsernameBlur}
        onChangeText={value => setUsername(value)}
        isInvalid={Boolean(usernameError)}
        errorMessage={usernameError}
        autoCapitalize="none"
      />

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
      />

      <Button mt="2" colorScheme="indigo">
        Sign up
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
