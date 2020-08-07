import React from 'react';
import { MenuProvider } from 'react-native-popup-menu';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import Home from './src/components/Home';
import Favourite from './src/components/Favourite';
import FoodList from './src/components/FoodList';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './src/components/Dashboard';
import DrawNav from './src/components/DrawNav';

import { persistor, store } from './src/components/utils/store';
import Food from './src/components/Food';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MenuProvider>
          <NavigationContainer independent={true}>
            <Stack.Navigator
              screenOptions={{ headerShown: false, gestureEnabled: false }}
              headerMode='screen'
            >
              <Stack.Screen name='Dashboard' component={Dashboard} />
              <Stack.Screen name='Home' component={Home} />
              <Stack.Screen name='FoodList' component={FoodList} />
              <Stack.Screen name='Food' component={Food} />
            </Stack.Navigator>
          </NavigationContainer>
        </MenuProvider>
      </PersistGate>
    </Provider>
  );
}
