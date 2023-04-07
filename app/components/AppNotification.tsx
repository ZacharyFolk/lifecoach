import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
// write necessary typescript types

const AppNotification = ({type, text}) => {
  const height = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(height, {
      toValue: 40,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, []);

  const backgroundColor = type === 'error' ? 'red' : 'green';
  return (
    <Animated.View style={[styles.container, {height, backgroundColor}]}>
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  text: {
    color: 'white',
  },
});

export default AppNotification;
