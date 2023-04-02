import React from 'react';
import {useState} from 'react';
import {FormControl, Input, IInputProps} from 'native-base';
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
        style={styles.input}
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

//   const [showPassword, setShowPassword] = useState(false);

//   secureTextEntry={type === 'password' && !showPassword}

//....
// {type === 'password' && (
//     <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//       <Icon as={Ionicons} name={showPassword ? 'eye-off' : 'eye'} />{' '}
//       {/* Use as prop to specify Ionicons library */}
//     </TouchableOpacity>
//   )}
