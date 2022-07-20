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
  Modal,
  Alert,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const styles = require('../styling/Stylesheet');
import Ionicons from '@expo/vector-icons/Ionicons';
import TermsAndConditions from '../utilities/TermsAndConditions';
import { validateEmailId } from '../utilities/ValidateEmail';

// Todo: login only after cerdentials validation
export default function LoginPage({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const invalidInput: string = 'Not a valid input!';
  const [emailId, setEmailId] = useState(null);
  const assignEmailId = (email) => {
    setEmailId(email);
    if (!validateEmailId(email)) {
      setEmailId(invalidInput);
    }
  };
  return (
    <View style={styles.loginScreen}>
      <View style={styles.alignInARow}>
        <TextInput
          style={styles.input}
          placeholder="Email Id"
          placeholderTextColor="#328da8"
          onChangeText={(val) => assignEmailId(val)}
        />
        {!emailId && (
          <Ionicons name="checkmark-circle-outline" size={20} color="black" />
        )}
        {emailId == invalidInput && (
          <Ionicons name="alert-circle-outline" size={20} color="red" />
        )}
        {emailId && emailId != invalidInput && (
          <Ionicons name="checkmark-circle-outline" size={20} color="green" />
        )}
      </View>
      <View style={styles.alignInARow}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#328da8"
          style={styles.input}
          label="Password"
          secureTextEntry={passwordVisible}
        />
        {passwordVisible && (
          <Ionicons
            name="eye"
            size={20}
            color="grey"
            onPress={() => setPasswordVisible(!passwordVisible)}
          />
        )}
        {!passwordVisible && (
          <Ionicons
            name="eye-off"
            size={20}
            color="grey"
            onPress={() => setPasswordVisible(!passwordVisible)}
          />
        )}
      </View>
      <Pressable
        style={({ pressed }) => [styles.customButton]}
        onPress={() => navigation.navigate('Home')}>
        <View style={styles.alignment}>
          <Text style={styles.buttonText}>Login</Text>
        </View>
      </Pressable>
      <View>
        <Modal transparent={false} visible={modalVisible}>
          <View style={styles.modal}>
            <TouchableHighlight
              onPress={() => {
                setModalVisible(false);
              }}>
              <View style={styles.padBottom}>
              <View style={styles.alignEnd}>
                <Ionicons name="close-circle-outline" size={40} color="white" />
              </View>
              </View>
            </TouchableHighlight>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ flex: 1, flexWrap: 'wrap' }}>
                <TermsAndConditions />
              </Text>
            </View>
          </View>
        </Modal>
        <TouchableHighlight
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text style={styles.text}>Terms and Conditions</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
