import React from 'react';
import {Input} from 'native-base';
import {TextInput} from 'react-native';
type AppInputProps = {
  value: string;
  placeholder: string;
};
function AppInput({value, placeholder, ...rest}: AppInputProps): JSX.Element {
  return <Input value={value} placeholder={placeholder} {...rest} />;
}
export default AppInput;
