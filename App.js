import * as React from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import Constants from 'expo-constants';
const styles = require('./components/styling/Stylesheet');
import Navigator from './components/navigator/TemplatesStack';

export default function App() {
  return (
    <View style={styles.mainScreen}>
      <Navigator />
    </View>
  );
}