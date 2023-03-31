import React from 'react';
import {TouchableHighlight, Text} from 'react-native';

function SubmitButton({title}: {title: string}): JSX.Element {
  return (
    <TouchableHighlight activeOpacity={0.7} underlayColor="#30aaff">
      <Text>{title}</Text>
    </TouchableHighlight>
  );
}

export default SubmitButton;
