import React from 'react';
import FormContainer from '../components/FormContainer';
import AppInput from '../components/AppInput';
import SubmitButton from '../components/SubmitButton';
import FormNavigation from '../components/FormNavigation';

function ForgotPassword({navigation}: any): JSX.Element {
  return (
    <FormContainer>
      <AppInput placeholder="Email" value="" />
      <SubmitButton title="Refresh Password" />
      <FormNavigation
        leftLink="Login"
        rightLink="Forgot Password?"
        onLeftPress={() => navigation.navigate('Login')}
        onRightPress={() => navigation.navigate('ForgotPassword')}
      />
    </FormContainer>
  );
}

export default ForgotPassword;
