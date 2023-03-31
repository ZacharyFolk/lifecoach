import React from 'react';
import {View} from 'react-native';
import AppLink from './AppLink';
type FormNavigationProps = {
  leftLink: string;
  rightLink: string;
  onLeftPress: () => void;
  onRightPress: () => void;
};

function FormNavigation({
  leftLink,
  rightLink,
  onLeftPress,
  onRightPress,
}: FormNavigationProps) {
  return (
    <View>
      <AppLink text={leftLink} onPress={onLeftPress} />
      <AppLink text={rightLink} onPress={onRightPress} />
    </View>
  );
}

export default FormNavigation;
