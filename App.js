/**
 * Tourmega Test Application
 * https://github.com/bimemto/tourmega_assignment
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './src/MainScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <AppStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

const AppStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      headerMode="none"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default App;
