import React from 'react';

import {Text, Link, HStack} from 'native-base';
interface AuthLinksProps {
  message: string;
  linktext: string;
  linkpath: string;
  navigation: any;
}
export default function AuthLinks({
  message,
  linktext,
  linkpath,
  navigation,
}: AuthLinksProps): JSX.Element {
  return (
    <HStack mt="6" justifyContent="center">
      <Text
        fontSize="sm"
        color="coolGray.600"
        _dark={{
          color: 'warmGray.200',
        }}>
        {message}
        {'  '}
      </Text>
      <Link
        onPress={() => navigation.navigate(linkpath)}
        _text={{
          color: 'indigo.500',
          fontWeight: 'medium',
          fontSize: 'sm',
        }}>
        {linktext}
      </Link>
    </HStack>
  );
}
