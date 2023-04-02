import React from 'react';
import {Button} from 'native-base';
import AuthLayout from '../components/AuthLayout';
import AuthInput from '../components/AuthInput';
function ForgotPassword(): JSX.Element {
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
      <Button mt="2" colorScheme="indigo">
        Send Email
      </Button>
    </AuthLayout>
  );
}

export default ForgotPassword;
