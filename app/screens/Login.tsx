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
} from 'native-base';

import AppInput from '../components/AppInput';
import FormContainer from '../components/FormContainer';
import FormNavigation from '../components/FormNavigation';
import SubmitButton from '../components/SubmitButton';

import AuthLayout from '../components/AuthLayout';
function Login({navigation}: any): JSX.Element {
  const {toggleColorMode} = useColorMode();
  const text = useColorModeValue('Light', 'Dark');
  const bg = useColorModeValue('warmGray.50', 'coolGray.800');

  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  // Create validation function to check if email is valid
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
    <AuthLayout title="Welcome" subtitle="Sign in to continue!">
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
        <Link
          onPress={() => navigation.navigate('ForgotPassword')}
          _text={{
            fontSize: 'xs',
            fontWeight: '500',
            color: 'indigo.500',
          }}
          alignSelf="flex-end"
          mt="1">
          Forget Password?
        </Link>
      </FormControl>
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
