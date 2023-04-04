import React from 'react';
import {Button, Text} from 'native-base';
interface Props {
  onPress: () => void;
  isSubmitting: boolean;
  buttonText: string;
  buttonColor?: string;
}
const SubmitButton: React.FC<Props> = ({
  onPress,
  isSubmitting,
  buttonText,
  buttonColor,
}) => (
  <Button
    mt={2}
    onPress={onPress}
    disabled={isSubmitting}
    colorScheme={buttonColor}>
    <Text>{buttonText}</Text>
  </Button>
);

export default SubmitButton;
