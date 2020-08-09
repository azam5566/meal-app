import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import AppButton from '../components/AppButton';
import Colors from '../utils/colors';
import useStatusBar from '../hooks/useStatusBar';

export default function WelcomeScreen({ navigation }) {
  useStatusBar('light-content');

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/icon.png')} style={styles.logo} />
        <Text
          style={{
            fontSize: 28,
            fontWeight: '600',
            paddingVertical: 20,
            color: 'white',
            top: 160,
            display: 'flex',
            width: '100%',
          }}
        >
          Meal App
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title='Loginn'
          onPress={() => navigation.navigate('Login')}
        />
        <AppButton
          title='Register'
          color='secondary'
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  logoContainer: {
    position: 'absolute',
    top: 60,
    alignItems: 'center',
  },
  logo: {
    width: 125,
    height: 125,
    top: 140,
  },
  buttonContainer: {
    padding: 20,
    paddingBottom: 60,
    width: '100%',
  },
});
