import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Pressable,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};
type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

type LoginProps = {
  navigation: LoginScreenNavigationProp;
};

type RegisterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Register'
>;

type RegisterProps = {
  navigation: RegisterScreenNavigationProp;
};

type ForgotPasswordScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ForgotPassword'
>;

type ForgotPasswordProps = {
  navigation: ForgotPasswordScreenNavigationProp;
};

type FormNavigationProps = {
  leftLink: string;
  rightLink: string;
  onLeftPress: () => void;
  onRightPress: () => void;
};

type AppInputProps = {
  value: string;
  placeholder: string;
};

function AppInput({value, placeholder, ...rest}: AppInputProps): JSX.Element {
  return <TextInput value={value} placeholder={placeholder} {...rest} />;
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

function SubmitButton({title}: {title: string}): JSX.Element {
  return (
    <TouchableHighlight activeOpacity={0.7} underlayColor="#30aaff">
      <Text>{title}</Text>
    </TouchableHighlight>
  );
}

function Login({navigation}: LoginProps): JSX.Element {
  return (
    <FormContainer>
      <AppInput placeholder="Username" value="" />
      <AppInput placeholder="Password" value="" />
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

function Register({navigation}: RegisterProps): JSX.Element {
  return (
    <FormContainer>
      <AppInput placeholder="Username" value="" />
      <AppInput placeholder="Email" value="" />
      <AppInput placeholder="Password" value="" />
      <AppInput placeholder="Confirm Password" value="" />
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
function ForgotPassword({navigation}: ForgotPasswordProps): JSX.Element {
  return (
    <FormContainer>
      <AppInput placeholder="Email" value="" />
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

export default App;
