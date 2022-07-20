import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../templates/Login';
import Stayflexi from '../templates/Stayflexi';
import Home from '../templates/Home';

const screens = {
  Default: {
    screen: Stayflexi,
    navigationOptions: {
      headerShown: false,
      headerStyle: { backgroundColor: 'black' },
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'light',
      },
      headerStyle: { backgroundColor: '#1AB794' },
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
      headerStyle: { backgroundColor: '#09aab0' },
    },
  },
};

const TemplatesStack = createStackNavigator(screens);
export default createAppContainer(TemplatesStack);