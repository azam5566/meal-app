import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from './../screens/Dashboard';
import Home from './../screens/Home';
import FoodList from './../screens/FoodList';
import Food from './../screens/Food';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
      headerMode='screen'
    >
      <Stack.Screen name='Dashboard' component={Dashboard} />
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='FoodList' component={FoodList} />
      <Stack.Screen name='Food' component={Food} />
    </Stack.Navigator>
  );
}
