import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Screen from './Screen';
import Header from './Header';
import Card from './Card';
import Home from './Home';
import FoodList from './FoodList';

const Drawer = createDrawerNavigator();

export default function Favourite({ navigation }) {
  const users = [
    {
      id: 1,
      name: 'Shaikh',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 2,
      name: 'Mohammad',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 3,
      name: 'Azam',
      image: 'https://picsum.photos/200/300',
    },
  ];

  function handleLeftClick() {
    navigation.toggleDrawer();
    console.log('helll');
  }

  return (
    <Screen style={styles.container}>
      <StatusBar translucent={true} style='inverted' />
      <Header
        leftImage='menu'
        rightImage='more-vertical'
        text='My Favourites'
        onLeftImagePressed={(e) => {
          handleLeftClick();
        }}
      />
      <FlatList
        data={users}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(user) => user.id.toString()}
        numColumns={1}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
