import React from 'react';
import {Button, Text} from 'native-base';
interface Props {
  onPress: () => void;
  isSubmitting: boolean;
  buttonText: string;
}
const SubmitButton: React.FC<Props> = ({onPress, isSubmitting, buttonText}) => (
  <Button
    mt={2}
    onPress={onPress}
    disabled={isSubmitting}
    colorScheme={isSubmitting ? 'trueGray' : 'indigo'}>
    <Text>{isSubmitting ? 'Submitting...' : buttonText}</Text>
  </Button>
);

export default SubmitButton;
