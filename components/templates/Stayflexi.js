import React, { useRef, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated,
  Easing,
  Image,
  Pressable,
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
const styles = require('../styling/Stylesheet');
import { createAppContainer } from 'react-navigation';

// Todo: Add signin operation
export default function Stayflexi({ navigation }) {
  const rotateLogo = React.useRef(new Animated.Value(0)).current;
  const loadButtons = React.useRef(new Animated.Value(0)).current;
  const loadBrand = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(rotateLogo, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(loadBrand, {
        toValue: 1,
        duration: 3000,
      }),
      Animated.timing(loadButtons, {
        delay: 4000,
        toValue: 1,
      }),
    ]).start();
  }, [loadBrand, rotateLogo, loadButtons]);
  const spin = rotateLogo.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          opacity: loadBrand,
        }}>
        <Text style={styles.paragraph}>Stayflexi</Text>
      </Animated.View>
      <Animated.Image
        style={{
          transform: [{ rotate: spin }],
          width: 128,
          height: 128,
          alignItems: 'center',
        }}
        source={require('../../assets/stayflexi-icon.jpg')}
      />
      <Animated.View
        style={{
          opacity: loadButtons,
        }}>
        <View>
          <Pressable style={({ pressed }) => [styles.customButton]}>
            <View style={styles.alignment}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </View>
          </Pressable>
          <Pressable
            style={({ pressed }) => [styles.customButton]}
            onPress={() => navigation.navigate('Login')}>
            <View style={styles.alignment}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </Pressable>
        </View>
      </Animated.View>
    </View>
  );
}
