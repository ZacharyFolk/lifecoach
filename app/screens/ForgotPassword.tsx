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
import AuthLayout from '../components/AuthLayout';
function ForgotPassword({navigation}: any): JSX.Element {
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');

  const validateEmail = (inputValue: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);
  };

  const handleEmailBlur = () => {
    if (!validateEmail(email)) {
      setEmailError('Email is invalid');
    } else {
      setEmailError('');
    }
  };

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Email will be sent with reset instructions.">
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

      <Button mt="2" colorScheme="indigo">
        Send Email
      </Button>
    </AuthLayout>
  );
}

export default ForgotPassword;
