import React from 'react';
import {Box, Heading, VStack, Center, useColorModeValue} from 'native-base';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}
function AuthLayout({children, title, subtitle}: AuthLayoutProps) {
  const bg = useColorModeValue('warmGray.50', 'coolGray.800');
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <Box bg={bg} h="100%">
          <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
              <Heading
                size="lg"
                fontWeight="600"
                color="coolGray.800"
                _dark={{
                  color: 'warmGray.50',
                }}>
                {title}
              </Heading>
              <Heading
                mt="1"
                _dark={{
                  color: 'warmGray.200',
                }}
                color="coolGray.600"
                fontWeight="medium"
                size="xs">
                {subtitle}
              </Heading>
              <VStack space={3} mt="5">
                {children}
              </VStack>
              {/*

              <Button onPress={toggleColorMode} h={10}>
                Toggle
              </Button> */}
            </Box>
          </Center>
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default AuthLayout;
