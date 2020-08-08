import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Screen from '../components/Screen';
import CardMenu from '../components/CardMenu';
import Header from './../components/Header';

export default function Home({ navigation }) {
  const categories = useSelector((store) => store.root.categories);
  const meals = useSelector((store) => store.root.meals);

  // const filteredMeal = route.params ? route.params.filteredMeal : [];
  // const filteredCategories = route.params
  //   ? route.params.uniqueFilteredCategories
  //   : [];

  // var newCat = [];

  // if (route.params) {
  //   filteredCategories.map((it) => {
  //     newCat = [
  //       ...newCat,
  //       ...categories.filter((category) => category.id.includes(it)),
  //     ];
  //   });
  // }

  function handleLeftClick() {
    navigation.toggleDrawer();
  }

  function handlePress(item) {
    var filtered_item = meals.filter((meal) =>
      meal.categoryIds.includes(item.id)
    );
    navigation.navigate('FoodList', filtered_item);
  }

  return (
    <Screen style={styles.container}>
      <StatusBar translucent={true} style='inverted' />
      <Header
        leftImage='menu'
        rightImage='more-vertical'
        text='Meal App'
        onLeftImagePressed={(e) => {
          handleLeftClick();
        }}
      />
      <FlatList
        data={categories}
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
          paddingBottom: 50,
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
