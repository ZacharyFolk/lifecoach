import React from 'react';
import AppInput from '../components/AppInput';
import FormContainer from '../components/FormContainer';
import FormNavigation from '../components/FormNavigation';
import SubmitButton from '../components/SubmitButton';

function Register({navigation}: any): JSX.Element {
  return (
    <FormContainer>
      <AppInput placeholder="Username" value="" />
      <AppInput placeholder="Email" value="" />
      <AppInput placeholder="Password" value="" />
      <AppInput placeholder="Confirm Password" value="" />
      <SubmitButton title="Register" />
      <FormNavigation
        leftLink="Login"
        rightLink="Forgot Password?"
        onLeftPress={() => navigation.navigate('Login')}
        onRightPress={() => navigation.navigate('ForgotPassword')}
      />
    </FormContainer>
  );
}
export default Register;
