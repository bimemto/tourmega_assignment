import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-native-testing-library';
import {buildStore} from './store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const AppStackNavigator = ({component}) => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      headerMode="none"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={component} />
    </Stack.Navigator>
  );
};

export function renderWithRedux(component, {state} = {}) {
  const store = buildStore(state);
  const queries = render(
    <Provider store={store}>
      <NavigationContainer>
        <AppStackNavigator component={component} />
      </NavigationContainer>
    </Provider>,
  );

  return {
    ...queries,
    store,
  };
}
