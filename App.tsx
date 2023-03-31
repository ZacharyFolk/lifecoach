import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function AppInput({value, placeholder, onChange, ...rest}: any): JSX.Element {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      style={styles.inputs}
      {...rest}
    />
  );
}

function AppLink({text, onPress}: {text: string; onPress: () => void}) {
  return (
    <Pressable onPress={onPress}>
      <Text>{text}</Text>
    </Pressable>
  );
}

function FormContainer({children}: PropsWithChildren<{}>): JSX.Element {
  return <View>{children}</View>;
}
function FormNavigation({leftLink, rightLink, onLeftPress, onRightPress}: any) {
  return (
    <View>
      <AppLink text={leftLink} onPress={onLeftPress} />
      <AppLink text={rightLink} onPress={onRightPress} />
    </View>
  );
}

function SubmitButton({title}: {title: string}): JSX.Element {
  return (
    <TouchableHighlight activeOpacity={0.7} underlayColor="#30aaff">
      <View>
        <Text>{title}</Text>
      </View>
    </TouchableHighlight>
  );
}

function Login({navigation}): JSX.Element {
  return (
    <FormContainer>
      <AppInput placeholder="Username" />
      <AppInput placeholder="Password" />
      <SubmitButton title="Login" />
      <FormNavigation
        leftLink="Register"
        rightLink="Forgot Password?"
        onLeftPress={() => navigation.navigate('Register')}
        onRightPress={() => navigation.navigate('ForgotPassword')}
      />
    </FormContainer>
  );
}

function Register({navigation}): JSX.Element {
  return (
    <FormContainer>
      <AppInput placeholder="Username" />
      <AppInput placeholder="Email" />
      <AppInput placeholder="Password" />
      <AppInput placeholder="Confirm Password" />
      <SubmitButton title="Register" />
      <FormNavigation
        leftLink="Login"
        rightLink="Forgot Password?"
        onLeftPress={() => navigation.navigate('Login')}
        onRightPress={() => navigation.navigate('ForgotPassword')}
      />
    </FormContainer>
  );
}
function ForgotPassword({navigation}): JSX.Element {
  return (
    <FormContainer>
      <AppInput placeholder="Email" />
      <SubmitButton title="Refresh Password" />
      <FormNavigation
        leftLink="Login"
        rightLink="Forgot Password?"
        onLeftPress={() => navigation.navigate('Login')}
        onRightPress={() => navigation.navigate('ForgotPassword')}
      />
    </FormContainer>
  );
}
function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{title: 'Reset your password'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  inputs: {
    borderBottomColor: '#000000',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
