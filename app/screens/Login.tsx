import React from 'react';
import AppInput from '../components/AppInput';
import FormContainer from '../components/FormContainer';
import FormNavigation from '../components/FormNavigation';
import SubmitButton from '../components/SubmitButton';
function Login({navigation}: any): JSX.Element {
  return (
    <FormContainer>
      <AppInput placeholder="Username" value="" />
      <AppInput placeholder="Password" value="" />
      <SubmitButton title="Login" />
      <FormNavigation
        leftLink="Register"
        rightLink="Forgot Password?"
        onLeftPress={() => navigation.navigate('Register')}
        onRightPress={() => navigation.navigate('ForgotPassword')}
      />
    </FormContainer>
  );
}
export default Login;
