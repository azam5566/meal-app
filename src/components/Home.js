import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import Screen from './Screen';
import CardMenu from './CardMenu';
import Header from './Header';

export default function Home({ navigation }) {
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
    {
      id: 4,
      name: 'Azam',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 5,
      name: 'Azam',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 56,
      name: 'Azam',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 5654,
      name: 'Azam',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 123,
      name: 'Azam',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 23435,
      name: 'Azam',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 3243,
      name: 'Azam',
      image: 'https://picsum.photos/200/300',
    },
  ];

  function handlePress(item) {
    navigation.navigate('FoodList', item);
  }

  return (
    <Screen style={styles.container}>
      <StatusBar translucent={true} style='inverted' />
      <Header
        leftImage='food-fork-drink'
        rightImage='more-vertical'
        text='Meal App'
        onLeftImagePressed={() => {}}
      />
      <FlatList
        data={users}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CardMenu
            item={item}
            onPress={() => {
              handlePress(item);
            }}
          />
        )}
        keyExtractor={(user) => user.id.toString()}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginTop: 20,
        }}
        contentContainerStyle={{
          paddingLeft: 14,
          paddingRight: 14,
          marginTop: 20,
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
