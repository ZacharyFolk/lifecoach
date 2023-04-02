import React from 'react';
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
  Icon,
} from 'native-base';

import AuthLayout from '../components/AuthLayout';
import AuthInput from '../components/AuthInput';

function Login({navigation}: any): JSX.Element {
  const [email, setEmail] = React.useState('');

  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');

  // Create validation function to check if email is valid
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
      />

      <Button mt="2" colorScheme="indigo">
        Sign in
      </Button>
      <HStack mt="6" justifyContent="center">
        <Text
          fontSize="sm"
          color="coolGray.600"
          _dark={{
            color: 'warmGray.200',
          }}>
          I'm a new user.
        </Text>
        <Link
          onPress={() => navigation.navigate('Register')}
          _text={{
            color: 'indigo.500',
            fontWeight: 'medium',
            fontSize: 'sm',
          }}>
          Sign Up
        </Link>
      </HStack>
    </AuthLayout>
  );
}
export default Login;
