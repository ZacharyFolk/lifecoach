import React from 'react';
import {useState} from 'react';
import {Link, FormControl, Input, IInputProps} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcon} from '../components/VectorIcons';
// IInputProps is an interface from native-base that inherits all the props from Input
// could also define the inferface like this:
// interface AuthInputProps {
//   label: string;
//   value: string;
//   placeholder: string;
//   onBlur: () => void;
//   onChangeText: (value: string) => void;
//   isInvalid?: boolean;
//   errorMessage?: string;
// }

interface AuthInputProps extends IInputProps {
  label: string;
  isInvalid?: boolean;
  errorMessage?: string;
  navigation?: any;
  loginHelper?: boolean;
}

const AuthInput: React.FC<AuthInputProps> = ({
  label,
  value,
  placeholder,
  onBlur,
  onChangeText,
  isInvalid,
  errorMessage,
  type = 'text',
  ...rest
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  return (
    <FormControl isRequired isInvalid={isInvalid}>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        value={value}
        placeholder={placeholder}
        onBlur={onBlur}
        onChangeText={onChangeText}
        type={type}
        secureTextEntry={type === 'password' && !isPasswordVisible}
        {...rest}
      />
      {type === 'password' && (
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <MaterialCommunityIcon
            style={styles.icon}
            size="large"
            color="purple"
            name={isPasswordVisible ? 'eye' : 'eye-off'}
          />
        </TouchableOpacity>
      )}
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>

      {rest.loginHelper && (
        <Link
          onPress={() => rest.navigation.navigate('ForgotPassword')}
          _text={{
            fontSize: 'xs',
            fontWeight: '500',
            color: 'indigo.500',
          }}
          alignSelf="flex-end"
          mt="1">
          Forget Password?
        </Link>
      )}
    </FormControl>
  );
};
const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    right: 10,
    top: -35,
  },
});
export default AuthInput;
