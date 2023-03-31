import React from 'react';

import {TextInput} from 'react-native';
type AppInputProps = {
  value: string;
  placeholder: string;
};
function AppInput({value, placeholder, ...rest}: AppInputProps): JSX.Element {
  return <TextInput value={value} placeholder={placeholder} {...rest} />;
}
export default AppInput;
