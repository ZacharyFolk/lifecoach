import React from 'react';
import AppInput from '../components/AppInput';
import FormContainer from '../components/FormContainer';
import FormNavigation from '../components/FormNavigation';
import SubmitButton from '../components/SubmitButton';
import AuthLayout from '../components/AuthLayout';
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  useColorMode,
  useColorModeValue,
} from 'native-base';
function Register({navigation}: any): JSX.Element {
  const [username, setUsername] = React.useState('');
  const [usernameError, setUsernameError] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  // validation that checks is not empty
  const validateUsername = (username: string) => {
    if (username.length < 1) {
      return false;
    }
    return true;
  };

  const handleUsernameBlur = () => {
    if (!validateUsername(username)) {
      setUsernameError('Username is invalid');
    } else {
      setUsernameError('');
    }
  };

  const handleEmailBlur = () => {
    if (!validateEmail(email)) {
      setEmailError('Email is invalid');
    } else {
      setEmailError('');
    }
  };

  // Create validation function to check if password is minimum 8 characters and maximum 20 characters
  const validatePassword = (password: string) => {
    if (password.length < 8 || password.length > 20) {
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
      <FormControl isRequired isInvalid={!!usernameError}>
        <FormControl.Label>Username</FormControl.Label>
        <Input
          value={username}
          placeholder="Blargh"
          onBlur={handleUsernameBlur}
          onChangeText={value => setUsername(value)}
        />
        <FormControl.ErrorMessage>{usernameError}</FormControl.ErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={!!emailError}>
        <FormControl.Label>Email</FormControl.Label>
        <Input
          value={email}
          placeholder="example@domain.com"
          onBlur={handleEmailBlur}
          onChangeText={value => setEmail(value)}
        />
        <FormControl.ErrorMessage>{emailError}</FormControl.ErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={!!passwordError}>
        <FormControl.Label>Password</FormControl.Label>
        <Input
          value={password}
          placeholder="********"
          onBlur={handlePasswordBlur}
          onChangeText={value => setPassword(value)}
        />
        <FormControl.ErrorMessage>{passwordError}</FormControl.ErrorMessage>
      </FormControl>
      <Button mt="2" colorScheme="indigo">
        Sign in
      </Button>
    </AuthLayout>
  );
}
export default Register;
