// any additional fonts will also need to update android/app/build.gradle and add to project.ext.vectoricons
// https://oblador.github.io/react-native-vector-icons/
import React from 'react';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IIcon from 'react-native-vector-icons/Ionicons';

MIcon.loadFont();
MCIcon.loadFont();
IIcon.loadFont();
type IconSizeProps = {
  iconSizes: keyof typeof IconSizes;
};

export interface IconProps {
  size: IconSizeProps['iconSizes'];
  name: string;
  color: string;

  style?: any;
}

export const IconSizes = {
  small: 13,
  medium: 18,
  large: 23,
  extraLarge: 27,
};

export const MaterialIcon = ({size, name, color, style}: IconProps) => (
  <MIcon name={name} size={IconSizes[size]} color={color} style={style} />
);
export const MaterialCommunityIcon = ({
  size,
  name,
  color,
  style,
}: IconProps) => (
  <MCIcon name={name} size={IconSizes[size]} color={color} style={style} />
);

export const IonIcon = ({size, name, color, style}: IconProps) => (
  <IIcon name={name} size={IconSizes[size]} color={color} style={style} />
);
