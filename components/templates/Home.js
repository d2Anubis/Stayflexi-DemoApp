import React, { useRef, useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated,
  Easing,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
const styles = require('../styling/Stylesheet');
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Home() {
  return (
    <View style={styles.homeBackground}>
      <View style={styles.homeDesign}>
        <View style={styles.alignInARow}>
          <Ionicons name="home-outline" size={20} color="white" />
          <Text style={styles.heading}>Hotel Santa Monica</Text>
        </View>
        <View style={styles.padTop}>
          <Text style={styles.greetings}>Welcome, John!</Text>
        </View>
      </View>
      <View style={styles.cardAlignment}>
        <Card>
          <Text style={styles.cardHeading}>
            Skip the line at the front desk
          </Text>
          <Text>
            Let's do your checkin now. It's easy, hassle free and won't take
            more than 2 minutes
          </Text>
          <View style={styles.alignEnd}>
            <Pressable style={({ pressed }) => [styles.customButtonBold]}>
              <View style={styles.alignment}>
                <Text style={styles.buttonTextBold}>
                  Proceed with self check-in
                </Text>
              </View>
            </Pressable>
          </View>
        </Card>
      </View>
      <View style={styles.cardAlign}>
        <View style={styles.alignInARow}>
          <View style={styles.halfScreen}>
            <Card containerStyle={styles.cardAlign}>
              <Text>Early check-in</Text>
            </Card>
          </View>
          <View style={styles.halfScreen}>
            <Card containerStyle={styles.cardAlign}>
              <Text>Late check-out </Text>
            </Card>
          </View>
        </View>
        <View style={styles.alignInARow}>
          <View style={styles.halfScreen}>
            <Card containerStyle={styles.cardAlign}>
              <Text>Room upgrade </Text>
            </Card>
          </View>
          <View style={styles.halfScreen}>
            <Card containerStyle={styles.cardAlign}>
              <Text>Add ons</Text>
            </Card>
          </View>
        </View>
      </View>
      <View style={styles.footerText}>
        <Text style={styles.greyText}> Engineered by Stayflexi </Text>
      </View>
    </View>
  );
}
