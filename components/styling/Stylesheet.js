'use strict';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    marginTop: 0,
    marginBottom: 25,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1AB794',
  },
  customButton: {
    height: 50,
    width: 150,
    marginTop: 30,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
  },
  customButtonBold: {
    height: 40,
    width: 180,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#09aab0',
    backgroundColor: '#09aab0',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
  },
  buttonTextBold: {
    fondSize: 8,
    color: 'white',
  },
  alignment: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginScreen: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 280,
    margin: 12,
    borderBottomWidth: 1,
    borderTopWidth: 0,
    padding: 10,
    color: '#328da8',
    borderBottomColor: 'white',
  },
  cardAlignment: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: -80,
  },
  homeDesign: {
    backgroundColor: '#09aab0',
    padding: 20,
    height: 180,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  greetings: {
    paddingBottom: 50,
    marginBottom: 50,
    color: 'white',
  },
  modal: {
    backgroundColor: 'black',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 100,
    paddingTop: 100
  },
  text: {
    marginTop: 50,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  padBottom: {
    marginBottom: 50,
  },
  padTop: {
    marginTop: 20,
  },
  alignInARow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  halfScreen: {
    marginLeft: 5,
    width: 160,
  },
  termsTextStyle: {
    marginTop: 80,
    marginLeft: 20,
    marginRight: 20,
    fontFamily: 'monospace',
    textAlign: 'justify',
    color: '#fff'
  },
  cardAlign: {
    borderColor: '#fff',
    height: 100,
  },
  heading: {
    fontSize: 25,
    paddingLeft: 10,
    color: 'white',
  },
  alignEnd: {
    alignSelf: 'flex-end',
  },
  footerText: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 220,
    marginBottom: 20,
    color: 'grey',
  },
  homeBackground: {
    backgroundColor: '#fff',
    marginTop: 50,
  },
  cardHeading: { fontSize: 18, marginBottom: 10 },
  mainScreen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  greyText: {
    color: 'grey'
  }
});
