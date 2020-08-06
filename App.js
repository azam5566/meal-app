import React from 'react';

import Home from './src/components/Home';
import Favourite from './src/components/Favourite';
import FoodList from './src/components/FoodList';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './src/components/Dashboard';
import DrawNav from './src/components/DrawNav';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: false }}
        headerMode='screen'
      >
        <Stack.Screen name='Dashboard' component={Dashboard} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='FoodList' component={FoodList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
