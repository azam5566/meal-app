import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import Screen from './Screen';
import Header from './Header';
import Card from './Card';
import Home from './Home';
import FoodList from './FoodList';
import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

import LottieView from 'lottie-react-native';

export default function Favourite({ navigation }) {
  const [favouriteList, setFavouriteList] = useState([]);

  function handleLeftClick() {
    navigation.toggleDrawer();
  }

  var meals = useSelector((store) => store.root.meals);
  var favourites = useSelector((store) => store.root.favourites);

  function updateValue() {
    meals = useSelector((store) => store.root.meals);
    favourites = useSelector((store) => store.root.favourites);
  }

  useFocusEffect(
    useCallback(() => {
      setFavouriteList(meals.filter((meal) => favourites.includes(meal.id)));
      // Do something when the screen is focused
      return () => {
        setFavouriteList(meals.filter((meal) => favourites.includes(meal.id)));
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [favourites])
  );

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
      {favouriteList.length > 0 ? (
        <FlatList
          data={favouriteList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card
              item={item}
              onCardPress={() => navigation.navigate('Food', item)}
            />
          )}
          keyExtractor={(user) => user.id.toString()}
          numColumns={1}
        />
      ) : (
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}
        >
          <LottieView
            autoPlay={true}
            style={{
              width: 300,
              height: 300,
              position: 'absolute',
              left: 15,
              top: 0,
            }}
            source={require('../../assets/tear.json')}
          />
          <Text
            style={{
              fontSize: 24,
              color: 'white',
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          >
            No Favourite
          </Text>
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
