import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';

import Header from './Header';
import Home from './Home';
import Favourite from './Favourite';
import DrawNav from './DrawNav';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      activeColor='white'
      barStyle={{
        backgroundColor: '#171717',
      }}
      labeled={false}
      labelStyle={{ fontSize: 0 }}
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name='Feed'
        component={DrawNav}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='home'
              color={color}
              size={28}
              style={{ alignSelf: 'center' }}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Favourite'
        component={Favourite}
        options={{
          tabBarLabel: 'Favourite',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='star'
              color={color}
              size={28}
              style={{ alignSelf: 'center' }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Dashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <MyTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: Constants.statusBarHeight,
  },
});
