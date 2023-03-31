import React from 'react';
import {Pressable, Text} from 'react-native';

function AppLink({text, onPress}: {text: string; onPress: () => void}) {
  return (
    <Pressable onPress={onPress}>
      <Text>{text}</Text>
    </Pressable>
  );
}

export default AppLink;
