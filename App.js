import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScreen';
import codePush from 'react-native-code-push';

const MainNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    SecondScreen: {
      screen: SecondScreen,
      navigationOptions: {
        headerShown: false,
      },
    }
  },

  {
  initialRouteName: 'HomeScreen',
  },

);

const App = createAppContainer(MainNavigator);

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START
};

export default codePush(codePushOptions)(App);

