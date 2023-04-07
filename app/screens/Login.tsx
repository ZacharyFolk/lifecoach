import React, {useState} from 'react';
import {Button} from 'native-base';
import AuthLayout from '../components/AuthLayout';
import AuthInput from '../components/AuthInput';
import AuthLinks from '../components/AuthLinks';
import SubmitButton from '../components/SubmitButton';
import {useFormValidation} from '../util/useFormValidation';
import axios, {AxiosResponse} from 'axios';
import AppNotification from '../components/AppNotification';
import {updateNotification} from '../util/helpers';
function Login({navigation}: any): JSX.Element {
  interface FormValues {
    [key: string]: string;
    email: string;
    password: string;
  }
  const initialValues: FormValues = {
    email: '',
    password: '',
  };
  const {formValues, errors, handleChangeText, handleBlur} = useFormValidation({
    initialValues,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({
    text: '',
    type: '',
  });

  const handleSubmit = async () => {
    setIsSubmitting(true);

    console.log(formValues);

    try {
      console.log('SUBMITTING FORM');
      const response = await axios.post(
        'http://10.0.2.2:8000/api/user/signin', // for android emulator have to replace localhost with this
        formValues,
        {
          timeout: 5000,
        },
      );
      console.log(response);
      console.log(response.data);
      // setFormValues(defaultValues);
    } catch (error: any) {
      if (error.response) {
        setIsSubmitting(false);
        return updateNotification(
          setMessage,
          error.response.data.error,
          'error',
        );
      } else if (error.request) {
        // Request was made but no response was received
        console.log(error.request);
      } else {
        // Something else happened while setting up the request
        console.log('Error', error.message);
      }
    }
  };

  return (
    <>
      {message.text && (
        <AppNotification type={message.type} text={message.text} />
      )}
      <AuthLayout title="Welcome" subtitle="Sign in to continue!">
        <AuthInput
          label="Email"
          value={formValues.email}
          onBlur={() => handleBlur('email')}
          onChangeText={value => handleChangeText('email', value)}
          isInvalid={Boolean(errors.email)}
          errorMessage={errors.email}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <AuthInput
          label="Password"
          value={formValues.password}
          onBlur={() => handleBlur('password')}
          placeholder="Enter your password"
          type="password"
          onChangeText={value => handleChangeText('password', value)}
          isInvalid={Boolean(errors.password)}
          errorMessage={errors.password}
          keyboardType="default"
          autoCapitalize="none"
          navigation={navigation}
          loginHelper={true}
        />

        <SubmitButton
          onPress={handleSubmit}
          isSubmitting={isSubmitting}
          buttonText={'Login'}
        />
        <AuthLinks
          navigation={navigation}
          message="Are you a new user?"
          linktext="Sign Up"
          linkpath="Register"
        />
      </AuthLayout>
    </>
  );
}
export default Login;
