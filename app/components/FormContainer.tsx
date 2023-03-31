import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';
function FormContainer({children}: PropsWithChildren<{}>): JSX.Element {
  return <View>{children}</View>;
}

export default FormContainer;
